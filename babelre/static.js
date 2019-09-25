// class Person {
//   constructor () {
//     this.state = {
//       count: 0
//     }
//   }
// }

// class Person {
//   state = {
//     count: 0
//   }
// }

// function Person () {
//   this.state = {
//     count: 0
//   }
// }

// 静态方法
// class Person {
//   static sayHello () {
//     return 'hello'
//   }
// }
// console.log(Person.sayHello())
// const wn = new Person();
// console.log(wn.sayHello())

// // ea5
// function Person () {}
// Person.sayHello () = function () {
//   return 'hello'
// }


// // 静态属性
// class Person {}
// Person.name = 'wn'

// class Person {
//   static name = 'wn'
// }

// es5
function Person () {}
Person.name = 'wn'

var person = new Person();
console.log(person.name)