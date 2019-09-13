let dog1 = {name: 'Snickers'}
let dog2 = {name: 'Sunny'}

const strong = new Map();// 强的映射
const weak = new WeakMap();// 弱映射

// key Object
strong.set(dog1, 'This is a 1 Snickers');
weak.set(dog2, 'This is a 2 Sunny');

for(const [key, val] of strong) {
  console.log(key, val);
}
console.log(weak.get(dog2));
dog1 = null;// 垃圾回收 对象
dog2 = null;
for(const [key, val] of strong) {
  console.log(key, val);
}
console.log(weak.get(dog2));
// for(const [key, val] of weak) {
//   console.log(val, key);
// }