// es6
// class Person {
//   constructor (name) {
//     this.name = name;
//   }
//   // 类内部定义的方法是不可以被枚举的
//   sayHello () {
//     return 'Hello,I am ' + this.name;
//   }
// }

// var wn = new Person('wn');
// console.log(wn.sayHello());
// console.log(Object.keys(Person.prototype))

// ES5
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  return 'Hello, I am ' + this.name;
}
var person = new Person('wn')
console.log(person.sayHello())
console.log(person.name)
console.log(person.__proro__)
// console.log(Object.keys(Person.prototype))