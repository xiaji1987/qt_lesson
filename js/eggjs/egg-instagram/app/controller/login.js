const Controller = require('egg').Controller

class LoginController extends Controller {
  async register() {
    const { ctx } = this
    const { password, username, email } = ctx.request.body
    console.log(password, username, email)
    // ctx.body = {statusCode: 200, mes: '注册成功'}
    // controller -> server -> model
    await ctx.service.user.register({password, username, email})
  }
  async loginIn() {
    
  }
}

module.exports = LoginController