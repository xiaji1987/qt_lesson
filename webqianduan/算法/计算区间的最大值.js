let arr = [3, 1, 6, 4, 5, 2]

function getMaxNum(arr) {
  let low = 0
  let high = 0
  let max = 0
  while(low < arr.length) {
    let temp = arr.slice(low, high + 1)
    let newNum = getCount(temp)
    max = max > newNum ? max : newNum
    high++
    if(high >= arr.length) {
      low++
      high = low
    }
  }
  return max
}

function getCount(arr) {
  let min = arr.sort((a, b) => a - b)[0]
  let count = arr.reduce((a, b) => a + b)
  return min * count
}

console.log(getMaxNum(arr))