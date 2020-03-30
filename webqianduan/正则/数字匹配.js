let num = 123456789
function getNum (num) {
  num = num.toString()
  let len = num.length
  if(len < 3) {
    return num
  }
  let r = len % 3
  let reg = new RegExp(/[0-9]{3}/g)
  return r > 0 ? num.slice(0, r) + ',' + num.slice(r, len).match(reg).join(',') : num.match(reg).join(',')
}
console.log(getNum(num))