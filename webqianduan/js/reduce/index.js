Array.prototype.myreduce = function (fn, acc = 0) {
  let arr =  this
  for (let i = 0; i < arr.length - 1; i++) {
    acc = fn(acc, arr[i + 1])
  }
  return acc
}

console.log([1, 2, 3].myreduce((a, b) => a + b))