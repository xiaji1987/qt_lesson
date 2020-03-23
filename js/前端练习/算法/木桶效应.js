let arr = [1, 8, 6, 2, 5, 4, 8, 3, 8]

function getMax(arr) {
  let max = 0
  let low = 0
  let high = 1
  while(low < arr.length - 1) {
    let newCount = (high - low) * (Math.min(arr[low], arr[high]))
    max = max > newCount ? max : newCount
    high++
    if (high >= arr.length) {
      low += 1
      high = low + 1
    }
  }
  return max
}

console.log(getMax(arr))