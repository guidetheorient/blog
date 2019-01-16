# Iterator 和 for...of 循环

* Iterator 接口的作用
  1. 为所有数据结构，提供了一种统一的访问机制
  2. 使得数据结构的成员能够按某种次序排列
  3. 供一些方法使用，如for...of循环

* Iterator只是将规格加到数据结构之上，所以遍历器与它所遍历的数据结构是分开的
* next方法用来移动指针对象

* [Symbol.iterator]属性是该数据的遍历器生成函数，执行这个函数返回的对象中必须包含next方法，用于移动指针，进行遍历

* 默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）

示例：数组上重新部署一个遍历器生成函数[Symbol.iterator]

```js
// 为什么有[Symbol.iterator]接口却不能遍历  -> 可以遍历，这里因为done: true了，还没遍历就结束了
Array.prototype[Symbol.iterator] = function() {
  return {
    next() {
      return {value: 1, done: true}
    }
  }
}

var a = new Array(1,2,3)

for(let key of a) {
  console.log(key)
}
```

示例：对象上部署一个遍历器生成函数[Symbol.iterator]

```js
const obj = {
  [Symbol.iterator]() {
    let a = 0
    return {
      next() {
        if(a < 2) {
          return { value: a++, done: false }
        } else {
          return { value: undefined, done: true}
        }
      }
    }
  }
}

var it = obj[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())

for(let key of obj) {
  console.log(key)
}

// { value: 0, done: false }
// { value: 1, done: false }
// { value: undefined, done: true }

// 0
// 1
```

* 原生具备Iterator的数据结构
  * Array
  * Map
  * Set
  * String
  * TypedArray
  * 函数的 arguments 对象
  * NodeList 对象
  * Generator对象

* 对象（Object）之所以没有默认部署 Iterator 接口，是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。本质上，遍历器是一种线性处理，对于任何非线性的数据结构，部署遍历器接口，就等于部署一种线性转换。不过，严格地说，对象部署遍历器接口并不是很必要，因为这时对象实际上被当作 Map 结构使用，ES5 没有 Map 结构，而 ES6 原生提供了。

* 普通对象部署数组的Symbol.iterator方法并无效果
* Symbol.iterator方法返回的对象中需要有next方法

## 调用Iterator接口的场合

解构  
扩展运算符  
yield*  
接受数组的场合： for..of, Array.from, Map, Set, Promise.all, Promise.race  

遍历器对象的return和throw方法，return方法会在for..of循环提前退出（通常出错或break）时调用

数组可以直接调用 var arr = [1,2,3] arr.keys() arr.entries() arr.values() 返回遍历器对象

for..of循环数组的时候，只返回数字索引的属性

## 与其他遍历语法的比较

### 以数组为例：  

forEach 无法跳出循环，break，return都不行  

### for..in遍历的缺点  

数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。  
for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。  
某些情况下，for...in循环会以任意顺序遍历键名。  

### for..of的优势  

有着同for...in一样的简洁语法，但是没有for...in那些缺点。  
不同于forEach方法，它可以与break、continue和return配合使用。  
提供了遍历所有数据结构的统一操作接口。  
