const http = require('http')
const compose = require('./compose')

module.exports = class App {
  constructor() {
    this.middleware = []
  }
  use(fn) {
    this.middleware.push(fn)
    return this
  }
  callback() {
    const fn = compose(this.middleware)
    return (req, res) => {
      fn()
    }
  }
  listen(...args) {
    const server = http.createServer(this.callback())
    server.listen(...args)
  }
}