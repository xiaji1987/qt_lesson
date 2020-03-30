let templateStr = 'i am ${name} , age ${age}, job ${job}'
let data = {
  name: 'xiaji',
  age: 20,
  job: '学生'
}
// function Func(str, data) {
//   for (let index in data) {
//     str = str.replace('${' + index + '}', data[index])
//   }
//   return str
// }

function Func(str, data) {
  for (let index in data) {
    let reg = new RegExp('\${'+ index +'}')
    // console.log(reg)
    str = str.replace(reg, data[index])
  }
  return str
}

console.log(Func(templateStr, data))