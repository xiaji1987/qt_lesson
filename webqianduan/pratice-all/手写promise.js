function newPromise(fn) {
  let self = this
  self.state = 'Pending'
  self.value = ''
  self.reason = ''
  self.onfulfilled = []
  self.onreject = []

  let resolve = function (newValue) {
    if(self.state == 'Pending') {
      self.state = 'fulfiiled'
      self.value = newValue
      self.onfulfilled.foreach(cb => cb())
    }
  }
  let reject = function (newreason) {
    if(self.state == 'Pending') {
      self.state = 'rejected'
      self.value = newreason
      self.onreject.foreach(cb => cb())
    }
  }
  fn(resolve, reject)
}

newPromise.prototype.then = function (onfulfilled, onreject) {
  if(this.state == 'Pending') {
    this.onfulfilled = onfulfilled
    this.onreject = onreject
  } else if(this.state == 'fulfiiled') {
    onfulfilled(this,value)
  } else {
    onreject(this.value)
  }
}

newPromise.prototype.all = function (promises) {
  let result = []
  return new newPromise((resolve, reject) => {
    promises.foreach((promise) => {
      promise.then((res) => {
        result.push(res)
        if(result.length == promise.length) {
          return resolve(result)
        }
      }).catch(reject)
    })
  })
}

newPromise.prototype.race = function (promises) {
  return new newPromise((resolve, reject) => {
    promises.foreach((promise) => {
      promise.then(resolve, reject)
    })
  })
}