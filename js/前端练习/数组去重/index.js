var arr = [1, 2, 1, 3, 5, 7, 2, 3]

var newArr = [...new Set(arr)]
// function unique (arr) {
//   const map = new Map()
//   return arr.filter((item) => !map.has(item) && map.set(item, 1))
// }

console.log(newArr)