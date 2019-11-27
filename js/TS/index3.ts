// // 类型断言
// const person = {}
// person.name = 'xiaomuzhu'
// person.age = 20

// interface Person {
//   name: String
//   age: Number
// }

// const person = {} as Person
// person.name = 'xiaomuzhu'
// person.age = 20

// 双重断言
// const person = 'abc' as any as Person

// 类型守卫
class Person {
  name = 'xiaomuzhu'
  age = 18
}

class Animal {
  name = 'petty'
  color = 'pink'
}

function getSomeThing(argn: Person | Animal) {
  if('age' in argn) {
    console.log(argn.color)
    console.log(argn.age)
  }
  if('color' in argn) {
    console.log(argn.color)
    console.log(argn.age)
  }
  if (argn instanceof Animal) {
    console.log(argn.color)
    console.log(argn.age)
  }
  if(argn instanceof Person) {
    console.log(argn.color)
    console.log(argn.age)
  }
}

// 字面量类型守卫
type Foo = {
  kind: 'foo'; //字面量
  foo: Number
}
type Bar = {
  kind: 'bar'; //字面量
  bar: Number
}

function doStuff(argn: Foo | Bar) {
  if(argn.kind === 'foo') {
    console.log(argn.foo)
    console.log(argn.bar)
  }
  if(argn.kind === 'bar') {
    console.log(argn.foo)
    console.log(argn.bar)
  }
}