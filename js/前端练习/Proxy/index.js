// 劫持对象
let a = { a: 1 }
let b = new Proxy(a, {
  get: (...rest) => {
    console.log('get')
    return Reflect.get(...rest);
  },
  set: (...rest) => {
    console.log('set');
    return Reflect.set(...rest);
  },
  deleteProperty: (...rest) => {
    console.log('deleteProperty')
    return Reflect.deleteProperty(...rest);
  },
  getPrototypeOf: (...rest) => {
    return Reflect.getPrototypeOf(...rest);
  }
})
b.a = 123;
console.log(b);

// 劫持数组
let a = [1,2,3]
let b = new Proxy(a, {
  get: (...rest) => {
    console.log('get')
    return Reflect.get(...rest);
  },
  set: (...rest) => {
    console.log('set');
    return Reflect.set(...rest);
  },
  deleteProperty: (...rest) => {
    console.log('deleteProperty')
    return  Reflect.deleteProperty(...rest);
  },
  getPrototypeOf: (...rest) => {
    return Reflect.getPrototypeOf(...rest);
  }
})
b.push(4);
// b.a = 123;
// console.log(b);