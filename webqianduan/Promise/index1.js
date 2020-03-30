function myPromise(fn) {
  let that = this
  that.status = 'pending'
  that.value = null
  that.reson = null
  that.FulFilled = []
  that.Rejected = []
  let resolve = function(newValue) {
    if(that.status == 'pending') {
      that.status = 'fulfilled'
      that.value = newValue
      that.FulFilled.forEach(cb => cb)
    }
  }
  let reject = function(newreson) {
    if(that.status == 'pending') {
      that.status = 'reject'
      that.reson = newreson
      that.Rejected.forEach(cb => cb)
    }
  }
  fn(resolve, reject)
}

myPromise.prototype.then = function (fulfilled, rejected) {
  if(this.status == 'pending') {
    this.FulFilled = fulfilled
    this.Rejected = rejected
  } else if (this.status == 'fulfilled') {
    fulfilled(this.value)
  } else if (this.status == 'reject') {
    rejected(this.reson)
  }
  return this
}

myPromise.prototype.all = function(promises) {
  return new Promise((resolve, reject) => {
    let result = []
    promises.forEach(promise => {
      promise.then(res => {
        result.push(res)
        if(result.length == promises.length) {
          resolve(result)
        }
      }).catch(reject)
    })
  })
}

myPromise.prototype.race = function(promises) {
  return new Promise((resolve, rejcet) => {
    promises.forEach(promise => {
      promise.then(resolve, rejcet)
    })
  })
}