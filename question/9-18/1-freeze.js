const box = {
  a: 10,
  b: {c: 100}
};
// Object.freeze(box);
// box.a = 100;
// box.b.c = 1000;
// 可变是万恶之源

// 复制了 box 的引用
const box1 = box;
box1.a = 1000;
console.log(box);
// box?

const arr = [0, 1];
// Object.freeze(arr);
arr[0] = 123;
console.log(arr);
const arr1 = arr;
arr1[0] = 146;
console.log(arr);
