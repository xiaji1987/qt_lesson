// 1. flat
let arr = [1, [1, 2, [1, 2, [4]]], [1, 2, 3]]
// arr.flat(Infinity)

// 2. 递归
function getArr(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(getArr(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}
// console.log(getArr(arr))

// 2. 递归
function getArray(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      res = res.concat(getArray(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}
// console.log(getArray(arr))

// 3. reduce()
function flat(arr) {
  return arr.reduce((a, b) => {
    return a.concat(Array.isArray(b) ? flat(b) : b)
  }, [])
}
// console.log(flat(arr))

// Array.prototype.myMap = function(fn) {
//   let arr = this
//   return arr.reduce((a, b) => {
//     a.push(fn(b))
//     return a
//   }, [])
// }

// let m = [1, 2, 3, 4, 5].myMap((a) => {
//   return a * a
// })
// console.log(m)