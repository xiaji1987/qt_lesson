function repeat(func, times, wait) {
  return function () {
    for (let i = 0; i < times; i++) {
      setTimeout(() => {
        func.apply(this, arguments)
      }, wait * i);
    }
  }
}


// 输入
const repeatFunc = repeat(alert, 4, 3000);

function alert(...argument) {
  console.log(...arguments)
}
// 输出
// 会alert4次 helloworld, 每次间隔3秒
repeatFunc('hellworld');