function asyncFunc(generatorFun) {
  return function () {
    const gen = generatorFun.apply(this, arguments)

    return new Promise((resolve, reject) => {
      function step(key, args) {
        let generatorResult
        try {
          generatorResult = gen[key](args)
        } catch(error) {
          return reject(error)
        }
        const {value, done} = generatorResult
        if (done) {
          return resolve(value)
        } else {
          return Promise.resolve(value).then(val => step('next', val), err => step('throw', err))
        }
      }
      step('next')
    })
  }
}