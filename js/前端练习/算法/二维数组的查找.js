// var findNumberIn2DArray = function(matrix, target) {
//   var arr = []
//   for (const item of matrix) {
//     if (item instanceof Array) {
//       arr = arr.concat(item)
//     }
//   }
//   if (arr.indexOf(target) >= 0) {
//     return true
//   } else {
//     return false
//   }
// };

// console.log(findNumberIn2DArray([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]), 5)
var hammingWeight = function(n) {
  // n = n + ''
  let arr = n.split('')
  console.log(arr)
  let count = 0
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 1) {
          count++
      }
  }
  return count
};

console.log(hammingWeight('00000000000000000000000000001011'))