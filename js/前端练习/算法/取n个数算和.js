function getResult(data, n, sum) {
  if(n == 0 && sum == 0) {
    return true
  } if(n <= 0) {
    return false
  } 
  if(n > 0) {
    for (let i = 0; i < data.length; i++) {
      let temp = data.slice(i + 1, data.length)
      return getResult(temp, n-1, sum - data[i]) || getResult(temp, n, sum)
    }
  }
}

console.log(getResult([1,2,3,4,5],4,19))