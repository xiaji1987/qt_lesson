function getResult(data, n, sum) {
  if (n == 0 && sum == 0) {
    return true
  }
  if (n < 0) {
    return false
  }
  if (n > 0) {
    for (var i = 0; i < data.length; i++) {
      var temp = data.slice(i + 1, data.length);
      return getResult(temp, n - 1, sum - data[i]) || getResult(temp, n, sum);
    }
  }
}

let data = [2, 4, 6, 9, 8, 3, 11, 13]
console.log(getResult(data, 4, 24))