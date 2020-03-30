// function Sixteen_ten(str, prin) {
//   str = Number(str);
//   if (prin) {
//     return str.toString(36) // 转化为10进制转化为36进制
//   } else {
//     return parseInt(str, 36) // 转化为36进制转化为10进制
//   }
// }

// console.log(Sixteen_ten(36, true))

function trans(str) {
  let a = "0123456789abcdefghijklmnopqrstuvwxyz"
  let res = ''
  if(str == 0) {
    return '0'
  }
  while(str > 0) {
    res = a[str % 36] + res
    str = str / 36
    if(str < 1) {
      break
    }
  }
  return res
}

console.log(trans(35))