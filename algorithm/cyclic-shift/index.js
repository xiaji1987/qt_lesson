// // [a, b, c, d, e, f, g, h] k = 2;
// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
// function RShift (list, k) {
//   const n = list.length
//   if(k % n === 0) {
//     return list
//   }
//   let cnt = Math.abs(k > 0 ? k % n : n + (k % n))
//   let temp = null
//   while (cnt--) {
//     temp = list[n - 1]
//     // 右移一位
//     for (let i = n - 1; i > 0; i--) {
//       list[i] = list[i - 1]
//     }
//     list[0] = temp
//   }
//   // const copy = [...list]
//   // for (let i = 0; i < n; i++) {
//   //   list[i] = copy[(k + i) % n] // 
//   // }
//   return list
// }

// console.log(RShift(arr, 2))

// // 2.
// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
// function RShift(list, k) {
//   const n = list.length
//   let i = Math.abs(k > 0 ? k % n : n + (k % n))
//   return list.concat([...list]).splice(n - i, n)
// }
// console.log(RShift(arr, 2))

// 3.
// 先把[0, n - k - 1]翻转
// 然后把[n - k, n - 1]翻转
// 最后把[0, n - 1]翻转
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
function reverse (list, start, end) {
  let temp = null
  while (start < end) {
    temp = list[start]
    list[start] = list[end]
    list[end] = temp
    start++
    end--
  }
}
function RShift(list, k) {
  const n = list.length
  if(k % n === 0){
    return list
  }
  reverse(list, 0, n - k - 1)
  reverse(list, n - k, n - 1)
  reverse(list, 0, n - 1)
  return list
}
console.log(RShift(arr, 2))