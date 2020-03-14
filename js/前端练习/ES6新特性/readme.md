1. 变量 const let var

#### 变量提升 
- var声明无论在何处，都会被视为声明在函数最顶部
- let 和 const 不会变量提升

#### 作用域
- var的函数作用域在函数内部作用，但是{}里是一样会提升的
- let const 是块级作用域，在{}里面形成作用域

#### 重复声明
- var 可以重复定义
- let 和const不能重新定义

#### 修改
const 定义的变量不能修改值，并且一定要赋初值

2. 箭头函数
箭头函数没有arguments
箭头函数没有prototype不能用构造函数
不需要function关键字
省略return
箭头函数没有自己的this,继承上下文的this

3. Promise
异步请求

回调函数的缺点
多重嵌套，回调地狱
不清楚是否是异步执行
信任问题
看不到报错信息

4. 字符串模板
let example = 123
const foo = 'this is a' + example
const foo =  `this is a ${example}`

5. 数组的for...of循环
for(let item of items){} (可迭代对象)
可迭代对象: Set Map Generator array string ...... 不止

6. 扩展运算符
let arr1 = [1, 2, 3]
let arr2 = [2, 3, 4]
console.log(arr1.concat(arr2)) // [1, 2, 3, 2, 3, 4]
console.log([...arr1, ...arr2]) // [1, 2, 3, 2, 3, 4]

7. class类
成员属性|实例方法: 在构造函数中用this.声明
静态属性: 通过类来声明 类.xxx
私有属性: 自由类内部可以使用其他任何地方都不可以
共有属性|原型属性: 在原型上生命属性或者方法xxx.prototype.xxx
请看index.js

8. includes函数
let arr = [1, 2, 3, 4]
arr.includes(1)// true
arr.includes(5) // fales

9. 结构赋值
const [a, b] = {a: 1, b: 2}
function foo(...rest){}

const [a, b] = [b, a]

10. Number
Number.EPSILON  Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON

11. Object.assign()
var a = {aa: 1, cc:{dd: 3}}
var b = {bb: 2, ee:{ff: 4}}
var c = Object.assign({}, a, b)

12. Object.getPrototypeOf(f)

13. Symbol 
生成一个唯一的值

14. Map/Set
WeakMap/WeakSet
