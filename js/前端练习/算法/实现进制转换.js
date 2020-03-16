function Sixteen_ten(str, prin) {
  str = Number(str);
  if (prin) {
    return str.toString(36) // 转化为10进制转化为16进制
  } else {
    return parseInt(str, 36) // 转化为16进制转化为10进制
  }
}

console.log(Sixteen_ten(36, true))