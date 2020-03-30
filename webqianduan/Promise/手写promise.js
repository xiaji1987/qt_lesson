function newPromise(fn) {
  let self = this
  self.status = 'pending'
  self.value = undefined
  self.reason = undefined
  self.onFulfilled = []
  self.onRejected = []
  let resolve = (newValue) => {
    if (self.status == 'pending') {
      self.status = 'fulfilled'
      self.value = newValue
      self.onFulfilled.foreach(el => el())
    }
  }
  let reject = (newReason) => {
    if (self.status == 'pending') {
      self.status = 'rejected'
      self.reason = newReason
      self.onFulfilled.foreach(el => el())
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

// module.exports = newPromise

function newPrimise(fn) {
  let self = this
  self.status = 'pending'
  self.value = undefined
  self.reason = undefined
  self.onFulfilled = null
  self.onReject = null
  let resolve = function (newValue) {
    if(self.status == 'pending') {
      self.status = 'fulfill'
      self.value = newValue
      self.onFulfilled = self.value
    }
  }
  let reject = function (newReason) {
    if(self.status == 'pending') {
      self.status = 'reject'
      self.reason = newReason
      self.onReject = self.reason
    }
  }
  fn(resolve, reject)
}

newPrimise.prototype.then = function(onFulfilled, onReject) {
  if(this.status == 'pending') {
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
  }
  if(this.status == 'fulfill') {
    onFulfilled()
  }
  if(this.status == 'fulfill') {
    onReject()
  }
}

newPromise.prototype.all = function(promises) {
  return new Promise((resolve, reject) => {
    let result = []
    promises.foreach((promise) => {
      promise.then(res => {
        result.push(res)
        if(result.length == promise.length) {
          resolve(result)
        }
      }).catch(reject)
    })
  })
}

newPrimise.prototype.race = function(promises) {
  return new Promise(function(resolve, reject) {
    promises.foreach(() => {
      promise.then(resolve, reject)
    })
  })
}

newPrimise.prototype.myall = function (promises) {
  return new Promise((resolve, reject) => {
    let result = []
    promises.forEach(promise => {
      promise.then(res => [
        result.push(res)
      ])
      if(promises.length == result.length) {
        resolve(result)
      }
    }).catch(reject)
  })
}

newPrimise.prototype.race = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve, reject)
    })
  })
}