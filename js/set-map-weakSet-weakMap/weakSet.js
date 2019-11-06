// var test = {
//   name: 'test',
//   conetnt: {
//     name: 'wn',
//     age: '18'
//   }
// }
// var ws = new WeakSet()
// console.log(ws);
// ws.add(test.conetnt)
// ws.delete(test.conetnt)
// console.log(ws);

// var a = { foo: 'bar' }
// ws.add(a)
// ws.delete(a)

const foos = new WeakSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method() {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在foo的实例上调用')
    }
  }
}
