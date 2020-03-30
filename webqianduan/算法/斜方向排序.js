// let arr = [
//   [3, 2, 1, 4], 
//   [3, 2, 1, 4], 
//   [3, 2, 1, 2]
// ]

let arr = [
  [11, 25, 66, 1, 69, 7],
  [23, 55, 17, 45, 15, 52],
  [75, 31, 36, 44, 58, 8],
  [22, 27, 33, 25, 68, 4],
  [84, 28, 14, 11, 5, 50]
]

function sortArr(arr) {
  for (let z = 0; z < arr.length; z++) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if(i + 1 < arr.length && j + 1 < arr[i].length && arr[i][j] > arr[i + 1][j + 1]) {
          [arr[i][j], arr[i + 1][j + 1]] = [arr[i + 1][j + 1], arr[i][j]]
        }
      }
    }
  }
  return arr
}

console.log(sortArr(arr))

/*
  [
    [1, 1, 1, 4],
    [2, 2, 2, 4],
    [3, 3, 3, 2]
  ]
*/