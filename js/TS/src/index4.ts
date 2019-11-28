// 装饰器 decorator
// class Person {
//   say () {
//     console.log('hello')
//   }
// }

// function Person () {
//   Object.defineProperty(Cat.prototype, 'say', {
//     value: function() {console.log('hello')},
//     enumerable: false,
//     configurable: true,
//     writable: true
//   })
// }

// 类装饰器
// function addAge (construction: Function) {
//   construction.prototype.age = 18
// }

// @addAge
// class Person {
//   name: string;
//   age?: number;
//   constructor () {
//     this.name = 'wn'
//     // this.age = 10
//   }
// }

// let person = new Person()

// console.log(person.age)

// Person = addAge(function Person(...) {

// })

// 属性/方法 的装饰器
// function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//   console.log(target)
//   console.log('prop ' + propertyKey)
//   console.log('desc ' + JSON.stringify(descriptor) + '\n\n')
//   descriptor.writable = true
// }

// class Person {
//   name: string
//   constructor() {
//     this.name = 'wn'
//   }
//   @method
//   say () {
//     return 'instance method'
//   }

//   @method
//   static run () {
//     return 'static method'
//   }
// }

// const abc = new Person()

// abc.say = function () {
//   return 'abc of say'
// }

// console.log(abc.say())

// 参数装饰器
function logParameter(target:Object, propertyKey: string, index: number) {
  console.log(target, propertyKey, index)
}

class Person {
  greet (message: string):string {
    return `${message} + ${name}`
  }
}

const p = new Person()

// console.log(p.greet('hello', name))