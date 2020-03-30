const str = '1231456'

function getStr(str) {
  let low = 0;
  let high = 0;
  let newStr = '';
  let num = 0
  while(high <= str.length) {
    high++
    if (high - low > num) {
      newStr = str.slice(low, high)
    }
    if (str[high] == str[low]) {
      low++
    }
  }
  return newStr
}

console.log(getStr(str))