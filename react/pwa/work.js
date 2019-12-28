// 不能操作 DOM
let sum = 0
for (let i = 0; i < 10000000; i++) {
  sum += i;
}
this.postMessage(sum)