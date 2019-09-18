const arr4 = ['lihua','lilei'];
// 枚举一个对象里面的属性 arr4[0]
// {'0': 'lihua','1': 'lilei'}
for (let item1 in arr4){
  console.log(item1);
}
// 数组 Map Set String (可迭代对象)
// for of 可以遍历可迭代对象
for (let item2 of arr4){
  console.log(item2);
}