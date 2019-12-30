const delay = (data, tick) => new Promise(resolve => {
  setTimeout(() => {
    resolve(data)
  }, tick)
})

module.exports = {
  getName () {
    return delay('Tom', 1000)
  },
  getAge () {
    return 20
  }
}