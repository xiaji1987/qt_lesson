let arr = [13, 1, 2, 5, 3, 8, 11]
let sum = 18

// 1. 时间复杂度O(n ^ 2)
// function findSum(arr, sum) { 
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if(arr[i] + arr[j] === sum) {
//         console.log(i, j, arr[i], arr[j])
//       }
//     }
//   }
// }



function findSum(arr, sum) {
  let obj = {}
  arr.forEach((v, i) => {
    if (String(v) in obj) {
      console.log('找到了', obj[v], i);
    }
    obj[sum - v] = i;
  });
}

findSum(arr, sum)