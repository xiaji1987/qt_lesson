function ps(n) {
  let arr = []
  function getCount(str, left, right) {
    if(str.length >= n * 2) {
      return arr.push(str)
    }
    if(left < n) {
      getCount(str + "(", left + 1, right)
    }
    if(right < left) {
      getCount(str + ")", left, right + 1)
    }
  }
  getCount('', 0, 0)
  console.log(arr)
}

ps(3)