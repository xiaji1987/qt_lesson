// var arr = [1, 2, 1, 3, 5, 7, 2, 3]

// var newArr = [...new Set(arr)]
// function unique (arr) {
//   const map = new Map()
//   return arr.filter((item) => !map.has(item) && map.set(item, 1))
// }

// console.log(newArr)

// function check(arr) {
//   let newArr = []
//   for (let item of arr) {
//     if(!newArr.includes(item)) {
//       newArr.push(item)
//     }
//   }
//   return newArr
// }

// console.log(check(arr))

let arr = [1, 2, 1, 3, 5, 7, 2, 3]

function setArr(arr) {
  let newArr = []
  for (let item of arr) {
    if(newArr.indexOf(item) < 0) {
      newArr.push(item)
    }
  }
  return newArr
}

console.log(setArr(arr))