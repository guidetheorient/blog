# 19-02-22 webpack splitchunks试验

> 参考  
1.[手摸手，带你用合理的姿势使用webpack4（下）](https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc)  
2.[一步一步的了解webpack4的splitChunk插件](https://juejin.im/post/5af1677c6fb9a07ab508dabb)  
3.[SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin)  
4.[webpack 4 Code Splitting 的 splitChunks 配置探索](https://imweb.io/topic/5b66dd601402769b60847149):dash:  
5.[webpack 4: Code Splitting, chunk graph and the splitChunks optimization](https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366):dash:  

:::tip
本文针对vue单页应用进行测试
:::

[[toc]]

webpack4.x新增的SplitChunksPlugin对默认情况下chunk的拆分做了很多优化

## 测试

:::tip splitChunks默认拆包情形  
- New chunk can be shared OR modules are from the node_modules folder  
- New chunk would be bigger than 30kb (before min+gz)  
- Maximum number of parallel requests when loading chunks on demand would be lower or equal to 5  
- Maximum number of parallel requests at initial page load would be lower or equal to 3  
:::

### splitChunks默认配置
```js
splitChunks: {
  chunks: 'async',
  minSize: 30000,
  maxSize: 0,
  minChunks: 1,
  maxAsyncRequests: 5,
  maxInitialRequests: 3,
  automaticNameDelimiter: '~',
  name: true,
  cacheGroups: {
    vendors: {
      test: /[\\/]node_modules[\\/]/,
      priority: -10
    },
    default: {
      minChunks: 2,
      priority: -20,
      reuseExistingChunk: true
    }
  }
}
```

### 页面介绍

|页面|公共依赖|依赖类型|原始大小|
|:-:|:-:|:-:|:-:|
|big-screen, layout| @stomp/stompjs, sockjs-client |node_modules| > 30kb |
|big-screen, dashboard, img-history|date-fns|node_modules| > 30kb |
|camera-detail, alarm-detail | set-alarm-dialog, set-rain-mode-dialog..|公共组件| < 30kb |
|camera-dtail, admin-cams | cam-info-form.vue |公共组件| < 30kb |
|check-item|sortablejs|node_modules| < 30kb |

### 默认配置作用

前提：针对layout, big-screen, dashboard三个路由进行测试

默认
<!-- [report](./report/report-default.html) -->
![](./images/2019-02-25-15-56-28.png)

default: false -> 与默认是一样的，这个应该对多页才有效 :question:
<!-- [report](./report/report-default-false.html) -->

vendors: false -> node_modules中的文件就和业务文件公共chunk打包在一起了
<!-- [report](./report/report-vendors-false.html) -->

1. 名称变化  
![](./images/2019-02-25-12-19-11.png)
![](./images/2019-02-25-12-20-45.png)
2. 包含文件变化  

|配置|打包结果|理解|
|:-:|:-:|:-:|
|vendors默认|big-screen和layout中各有一个time-count组件|vendors默认配置拆分出来的包为node_modules中的，与time-count没有可合并的关系，所以只有time-count自身>30kb才能单独拆分|
|vendors: false|1_default~big-screen~layout包含有time-count组件|只有default的默认配置，即有2个chunk用到的>30kb的公共部分拆分出来。首先entry(app)一个，三个路由各一个，按default规则找出dashboard、big-screen中的echarts一个，big-screen、layout公共部分一个。其中time-count也是big-screen、layout的公共部分（已经被拆出的公共部分>30kb），所以就移到了公共部分中|

**发现**：一个路由不管引入多少组件，vendors看到的是所有组件的依赖，而不是组件的子组件的依赖，比如time-count被layout和big-screen依赖，而date-fns被time-count依赖，最终webpack看到的是layout和big-screen依赖date-fns:question:   


### splitChunks.minSize
针对依赖原始大小（before min+gz & 模块化引入），如date-fns是针对其原始大小（172.23kb）
|node_module name|Stat size|Parsed size|
|:-:|:-:|:-:|
|date-fns | 172.23kb| 30.44kb |

#### 测试
- minSize: 170000 拆分出公共chunk
![](./images/2019-02-25-09-51-15.png)
- minSize: 180000 每个路由重复打包
![](./images/2019-02-25-09-54-17.png)

### splitChunks.chunks
只针对选中的模块进行拆分的优化
```markdown
// chunks属性值
initial: 只优化首次就加载的chunks，如app.js  
async: 只优化动态加载的chunks，如vue中的路由组件
all: 所有chunks  
funtion: return true的模块  -> // 比较适合去掉大屏页的依赖:dash:
```

假设vue-router中的路由是以动态加载的形式引入，打包时这个组件就是会被拆分为单独js文件的异步组件，chunks: 'async'只针对这些异步组件打包优化。即如果App.vue和dashboard.vue同时引用了echarts，那么echarts肯定被打包到app.js中，而不会单独拆分。当然echarts也不会被打包多次。
```js
const Login = () => import(/* webpackChunkName: "login" */ 'views/login/index')
```

假设vue-rotuer中的路由是以下面同步方式引入，打包时整个单页就是一个js，此时`chunks: 'async'就毫无作用`。此时如果设置`chunks: 'initial' | 'all'`则可以拆出node_modules中的模块(默认vendors配置下)
```js
import Login from 'views/login/index'
```

### splitChunks.name

```
// name属性值
false -> 继承output中的chunkFilename选项
true -> based on chunks and cache group key // 如单独拆出date-fns，包含这个module的chunk有app(initial chunk)，则名如date-fns~app.js
function (module, chunks, cacheGroupKey)
string
```

:::tip 文档
- If the splitChunks.name matches an entry point name, the entry point will be removed
- When assigning equal names to different split chunks, all vendor modules are placed into a single shared chunk, though it's not recommend since it can result in more code downloaded.
:::

:::tip
maxSize takes higher priority than maxInitialRequest/maxAsyncRequests. Actual priority is maxInitialRequest/maxAsyncRequests < maxSize < minSize.
:::

## 测试

:::tip 前提
1. 以下配置均在默认配置基础上修改
2. 只有app和一个动态加载的路由big-screen
:::

---
```js
// 并没有exclude掉
// 还是app, vendor, big-screen，并且screen中没有node_modules依赖
// 理解：exclude优先级 < initial(app.js初始加载的chunk)
chunks(chunk) {
  return chunk.name !== 'big-screen'
}
```
![](./images/2019-02-25-11-17-27.png)

---
```js
// 还是app, vendor, big-screen，并且screen中没有node_modules依赖
// 理解：不优化的情况下就应该都在app中，既然app.js被exclude了，所以也就不进行拆分了，app.js存在了echarts，所以big-screen中也不需要再打包了
chunks(chunk) {
  return chunk.name !== 'app'
}
```
![](./images/2019-02-25-11-18-16.png)

---
```js
// 加了一个dashboard动态import, echarts是单独打包了，但是date-fns, stompjs还是在vendor中，猜测是vendor-app这个原始的vendor是一定被共用的，只有除此之外的包，被exclude的包才不会引用出vendor-app之外的包，而是打包到自己里面。
// 但是为什么只有echarts拆出来了呢？因为app页面没有用到？
// 理解：echarts因为同步组件dashboard等被打包进app.js, 现在变成dashboard动态import, echarts显然要被拆分出来，而此时app.js中并没有echarts给big-screen依赖了，所以big-screen只能自己打包一份。而date-fns, stompjs因为同步组件的关系仍然被打包再vendor中，big-screen还是可以依赖的，所以并没有单独在big-screen中打包
chunks(chunk) {
  return chunk.name !== 'big-screen'
}
```
![](./images/2019-02-25-11-25-53.png)

--- 
```js
// 如果加一个layout(包含date-fns)的动态import，如果date-fns, stompjs在layout和big-screen都打了包说明上一个注释结论正确（即initial打包的module始终会被共享，而非initial的包才会有共不共享这一说）
// 结论：stompjs是分别直接引入layout和big-screen后使用的，所以是单独打包了。而date-fns是写了一个通用组件之后引入到这两个页面的所以最终还是打包在vender-app中
chunks(chunk) {
  return chunk.name !== 'big-screen'
}
```
![](./images/2019-02-25-11-39-22.png)
![](./images/2019-02-25-11-41-04.png)

---
```js
// 此时单独打包出date-fns（从vendor-app中拆出），此时的chunks exclude是没有作用的
chunks(chunk) {
  return chunk.name !== 'big-screen'
},
cacheGroups: {
  'date-fns': {
    test: /[\\/]node_modules[\\/]date-fns[\\/]/,
    priority: 1
  },
}
```
![](./images/2019-02-25-11-53-07.png)
---
```js
// 看echarts这个不包含在vendor-app中的能否拆出公共包
// 结论：这时chunks的exclude起作用了，cacheGroup 'echarts'只对dashboard有作用，打包出的文件名可看出echarts~dashboard，而big-screen中的还是打包了echarts
chunks(chunk) {
  return chunk.name !== 'big-screen'
},
cacheGroups: {
  'echarts': {
    test: /[\\/]node_modules[\\/](echarts|zrender)[\\/]/,
    priority: 1
  },
}
```
![](./images/2019-02-25-11-59-24.png)


```js
// 基础
vendors: {
  test: /[\\/]node_modules[\\/]/,
  priority: -10
},

```
```
// 可以拆开
'date-fns': {
  test: /[\\/]node_modules[\\/]date-fns[\\/]/,
  priority: -9,
},
```
**enforce**
> Tells webpack to ignore splitChunks.minSize, splitChunks.minChunks, splitChunks.maxAsyncRequests and splitChunks.maxInitialRequests options and always create chunks for this cache group.
```
// 不能拆开
'date-fns': {
  test: /[\\/]node_modules[\\/]date-fns[\\/]/,
  priority: -11,
  enforce: true
},
```
```
// 不能拆开
'date-fns': {
  test: /[\\/]node_modules[\\/]date-fns[\\/]/,
  priority: -11,
  enforce: true, 
  reuseExistingChunk: false
},
```

### 疑问

```
// 哪里可以看到module, chunks, cancheGroup里面的具体属性
name (module, chunks, cacheGroupKey) {
  // generate a chunk name...
  return; //...
}
```

Module.noParse ? external ? 
parcel
reuseExistingChunk 与 priority 与 enforce？
