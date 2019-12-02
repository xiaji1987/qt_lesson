let url = require('url')
let request = {
  get url () { // 架上get关键字，可以直接调用不需要括号，例如url
    return this.req.url
  },
  get path () {
    return url.parse(this.req.url).pathname
  },
  get query () {
    return url.parse(this.req.url).query
  }
}

module.exports = request