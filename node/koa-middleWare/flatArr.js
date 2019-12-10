// [1, 2, 3, [4, 5, 6]]
// [1, 2, 3, 4]

// function flat(arr) {
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     if(Array.isArray(arr[i])) {
//       res.concat(flat(arr[i]))
//     } else {
//       res.push(arr[i])
//     }
//   }
//   return res
// }


// console.log(flat([1, [2, 3, [4, 5, 6]]]))

let p = new Promise((resolve, reject) => {
  //做一些异步操作
  setTimeout(function () {
    var num = Math.ceil(Math.random() * 10); //生成1-10的随机数
    if (num <= 5) {
      resolve(num);
    }
    else {
      reject('数字太大了');
    }
  }, 2000);
});
p.then((data) => {
  console.log('resolved', data);
}, (err) => {
  console.log('rejected', err);
}
);