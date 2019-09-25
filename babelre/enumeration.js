let obj = {
  a: 'aaa',
  b: 'bbb',
  c: 'ccc',
  [Symbol('d')]: 'ddd'
}
Object.defineProperty(obj, 'e', {
  value: 'eee',
  enumerable: true
})
console.log(Object.keys(obj))
for (let key in obj) {
  console.log(key);
}