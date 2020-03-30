var arr = [[1,2], 3, [[[[6]]]]]
function getArr(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      res = res.concat(getArr(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}
// console.log(arr.toString().split(',').map(Number))
console.log(getArr(arr))
