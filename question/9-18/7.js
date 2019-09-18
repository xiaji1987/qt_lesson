// es6 新增的一个 数据类型
// string number boolean null undefined Symbol 简单数据类型
// Object 复杂数据类型
let a = Symbol('a');
let b = Symbol('a');
console.log(a === b);
var obj = {
  [a]: 'a value',
  b: 'b value',
  b: '123'
}
console.log(Object.keys(obj))
// 返回 一个对象上面 可枚举 属性
console.log(a in obj)
console.log(Object.getOwnPropertySymbols(obj));