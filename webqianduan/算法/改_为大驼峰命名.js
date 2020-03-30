function changeLine(str) {
  if (typeof str !== 'string') {
    alert('请确认要删除的对象为字符串！');
  } else {
    var newName = '';
    var arr = str.split('_');
    arr.map((v, i) => {
      if (i === 0) { return };
      newName += arr.substr(0, 1).toUpperCase() + arr.substr(1);
    })
  }
}
console.log(changeLine('a_c_def'))