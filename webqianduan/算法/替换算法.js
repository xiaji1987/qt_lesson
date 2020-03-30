const year = '2017';
const month = '09';
const day = '21';
const str = render('${year}-${month}-${day}')({ year, month, day });
console.log(str);

function render(text) {
  return  function(datas) {
    for(let i in datas) {
      let reg = new RegExp('${' + i + '}')
      console.log(reg)
      text = text.replace(reg, datas[i]) 
    }
    return text
  }
}