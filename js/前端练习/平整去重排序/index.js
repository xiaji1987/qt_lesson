var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
let res = []
function getArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      getArr(arr[i])
    } else {
      res.push(arr[i])
    }
  }
  return res
}
// console.log(arr.toString().split(',').map(Number))
console.log(getArr(arr))
