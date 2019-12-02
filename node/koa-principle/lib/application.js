let http = require('http')
let EventEmitter = require('events')
let stream = require('stream')

let context = require('./context')
let request = require('./request')
let response = require('./response')

class myKoa extends EventEmitter {
  constructor () {
    super()
    this.fn
    this.context = context
    this.request = request
    this.response = response
  }

  createContext(req, res) { // 创建ctx
    // 通过Object。create创建对象是为了继承this.context, 但是在增加属性不影响原对象
    const ctx = Object.create(this.context)
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)

    ctx.req = request.req = response.req = req
    ctx.res = request.res = response.res = res

    request.ctx = response.ctx = ctx
    request.response = response
    response.request = request

    return ctx
  }

  handleRequest(req, res) { // 处理请求
    res.statusCode = 404 // 默认
    let ctx = this.createContext(req, res)
    this.fn(ctx) // 调用用户给的回调， 把ctx还给用户使用
    if (typeof ctx.body == 'object') {
      res.setHeader('Content-Type', 'application/json;charse=utf8')
      res.end(JSON.stringify(ctx.body))
    } else if (ctx.body instanceof stream) {
      ctx.body(res)
    } else if (typeof ctx.body == 'string'|| Buffer.isBuffer(ctx.body)) {
      res.setHeader('Content-Type', 'text/html;charse=utf8')
    } else {
      res.end('Not found')
    }
    res.end(ctx.body) // ctx.body 用来输出到页面
  }

  use (fn) {
    this.fn = fn
  }

  listen (...args) {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}

module.exports = myKoa
