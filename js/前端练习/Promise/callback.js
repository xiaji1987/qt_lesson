// 例子
function a(b, callback) {
  return b + callback
}

function call(c) {
  return c + 5
  //这是回调函数
}

console.log(a(1, call(2)))