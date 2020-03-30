let arr = [
  [1, 0, 0, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
]

function getCount(arr) {
  let count = 0
  for (let item of arr) {
    let indexArr = [1, 3, 5]
    for (let i = 0; i < indexArr.length; i++) {
      let temp = item.slice(i, i + 4)
      if(check(temp)) {
        count++
      }
    }
  }
  return count
}

function check(arr) {
  if(arr.indexOf(0) >= 0) {
    return false
  } else {
    return true
  }
}

console.log(getCount(arr))
console.log(arr)