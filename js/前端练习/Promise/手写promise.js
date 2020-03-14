function newPromise(fn) {
  let self = this
  self.status = 'pending'
  self.value = undefined
  self.reason = undefined
  self.onFulfilled = null
  self.onRejected = null
  let resolve = (newValue) => {
    if (self.status == 'pending') {
      self.status = 'fulfilled'
      self.value = newValue
      self.onFulfilled(self.value)
    }
  }
  let reject = (newReason) => {
    if (self.status == 'pending') {
      self.status = 'rejected'
      self.reason = newReason
      self.onFulfilled(self.reason)
    }
  }
  fn(resolve, reject)
}

newPromise.prototype.then = function (onFulfilled, onRejected) {
  if (this.status == 'pending') {
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
  } else if (this.status == 'fulfilled') {
    onFulfilled(this.value)
  } else {
    onRejected(this.reason)
  }
  return this
}

// Promise.all1 = function (promises) {
//   let results = [];
//   return new Promise(function (resolve, reject) {
//     promises.forEach(promise => {
//       promise.then(res => {
//         results.push(res);
//         if (results.length === promises.length) {
//           resolve(results);
//         }
//       })
//         .catch(reject);
//     });
//   });
// }
// let p1 = Promise.resolve(1)
// let p2 = Promise.resolve(2)
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3)
//   }, 2000);
// })
// Promise.all1([p1, p2, p3])
//   .then(console.log);

module.exports = newPromise