let response = {
  get body () {
    return this._body // get 时返回该方法
  },
  set body (value) {
    this.res.statusCode = 200
    this._body = value
  }
 }

module.exports = response