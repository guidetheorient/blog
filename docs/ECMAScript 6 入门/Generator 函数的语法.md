<!-- markdownlint-disable -->
# Generator 函数的语法


* yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
* 通过该特性可以在generator函数开始运行后继续注入值

示例：yield包含在其他表达式中，需加上括号，作为函数参数或赋值表达式右边可不加
```js
function* demo() {
  console.log('Hello' + (yield));
  console.log('Hello' + (yield 123));

  // foo(yield 'a', yield 'b'); // OK
  // let input = yield; // OK
}

const g = demo();

g.next()
g.next()
g.next()
g.next()
// { value: undefined, done: false }

// Helloundefined
// { value: 123, done: false }

// Helloundefined
// { value: undefined, done: true }

// { value: undefined, done: true }
```

示例：yield作为单独的一行，加上分号，如此处不加分号，会得不到预期的值
```js
function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

for (let n of fibonacci()) {
  if (n > 1000) break;
  console.log(n);
}
```

示例：generator实例有throw方法，用此方法抛出的错误可在generator函数中捕获
```js
// Generator.prototype.throw()
// yield放在try中，至少执行过一次next方法
var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获', e);
  }
};

var i = g();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b
```

> 这种函数体内捕获错误的机制，大大方便了对错误的处理。多个yield表达式，可以只用一个try...catch代码块来捕获错误。如果使用回调函数的写法，想要捕获多个错误，就不得不为每个函数内部写一个错误处理语句，现在只在 Generator 函数内部写一次catch语句就可以了。  - 没看懂

[Generator函数语法 next()、throw()、return() 的共同点](http://es6.ruanyifeng.com/#docs/generator#next%E3%80%81throw%E3%80%81return-%E7%9A%84%E5%85%B1%E5%90%8C%E7%82%B9)

### yield*

看不懂 - yield*后面的 Generator 函数（没有return语句时），等同于在 Generator 函数内部，部署一个for...of循环。

### Generator中的this
```js
// g是gen的实例，但gen返回的是遍历器对象，而不是this，gen中this并不指向实例，也不能用this
const gen = function* () {}
const g = gen()
```

Generator为什么可以使用try...catch，而其他的异步操作不可以
http://es6.ruanyifeng.com/#docs/generator#Generator-%E4%B8%8E%E5%8D%8F%E7%A8%8B
http://es6.ruanyifeng.com/#docs/generator#Generator-%E4%B8%8E%E4%B8%8A%E4%B8%8B%E6%96%87

为什么要Thunk函数转换呢？
