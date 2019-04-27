# 掘金小册 - Vue.js组件精讲

::: tip TODO
todo
:::

注释的地方引发无限循环？？是不是vue实例的methods已经被bind过了，所以不能再被bind了
-> 挂载在this上面的方法已经被bind过了，所以再bind是无效的，会引发无限循环
解决：将方法写在模块顶级，再调用 或者 this.$options.methods.broadcast.apply(child, [componentName, eventName, params])
-> this.$options.methods也不行，因为当前组件有broadcast方法，它的子组件不一定有，要递归使用只有将其放在外面
![](./images/2019-03-22-11-11-43.png)

vue组件created是由外而内，渲染是由内而外
![](./images/2019-03-22-11-52-48.png)


provide/inject是父组件向子组件主动提供数据
dispatch/broadcast是父子组件互相传递数据（触发事件）


checkbox/radio html原生属性checked value disabled

checkbox-group updateModel管理value的赋值， change用于checkbox派发的change事件的处理并再向上一级冒泡

$mount()生成vm.$el，正好之后看下源码解析

new Vue({}), Vue.extend, Vue.component选项的区别？
rendor出来的组件都是实例的children，因为 Instance 下只 Render 了 Notification 一个子组件，所以可以用 $children[0] 访问到。


```js
 const Instance = new Vue({
  data: props,
  render (h) {
    return h(Alert, {
      props: props
    });
  }
});
```

数组/对象检测 ?
```
this.mylist[0].name = 'abc' 响应式
this.mylist[0] = 'xx' 非响应式
```
deep

render函数可以直接return 数组型的childNode?? `return [vNode, vNode]`


render与slot-scope
- 方案一 组件提供slot
template中写slot
table组件中的template提供slot
没有render函数

- 方案二 用户提供slot
template中写slot
用户传入的render函数中提供slot

- 方案三 组件提供slot
template中写slot


所以方案一和方案三的差别是什么?
方案三slot使用table render的方式提供的，可以跨层级
方案一是直接写在table template中的


vue官方文档为什么说functional组件没有响应式数据？props不是吗？

插槽/函数式组件


### 插槽

https://itnext.io/whats-the-deal-with-functional-components-in-vue-js-513a31eb72b0
https://cn.vuejs.org/v2/guide/components-slots.html


1. 插槽用于向组件传递内容，使用`this.$slots`访问，所以在`render function`中的`this.$slots`访问插槽的内容，而`this.$scopedSlots`则是`function<Array>`，通过在render function的chilren中使用`this.$scopedSlots.default({text: 'xx'})`向外传递数据。

2. 如果父组件向组件传递了内容，子组件可以使用this.$slot接收，用在任何地方，比如在createElement children数组中`[this.$slot.default]`，可以展示出来

3. $scopedSlots在组件中写在render function负责对外提供接口，而在使用此组件的页面中，通过render function的 data.scopedSlots

```js
// 组件 children中向外提供一个作用域插槽及数据
[
  this.$scopedSlots.default({
    text: 'xx'
  }), 
]

// 使用此组件提供的scopedSlots
// 外部通过data.scopedSlots来提供render function，从而渲染这个插槽
h(
  Father,
  {
    scopedSlots: {
      // 作用域插槽会覆盖下面children中的非作用域插槽
      default (props) {
        return h('span', props.text)
      }
    }
  },
  [
    // default slot
    h('div', 'default slot part1'),
    h('div', 'default slot part2'),
    // named slot foo
    h(
      'div', 
      {
        slot: 'foo'
      },
      'named slot foo'
    )
  ]
)
```
