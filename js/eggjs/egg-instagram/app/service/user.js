const Service = require('egg').Service
const uuid = require('uuid')
const crypto = require('crypto')

class UserService extends Service {
  async register(user) {
    // sql 及存储业务的组织
    const { ctx, app } = this
    // 准备user_id
    // 1, 2, 3, 4 很lou
    // user 正在成为一个对象
    console.log(uuid.v4(), '/*+*/*+**++*')
    user.user_id = uuid.v4().replace(/-/g, '')
    console.log(user.user_id, '*****')
    // password 不能存名文
    user.password = crypto.createHmac('sha256', app.config.password_secret).update(user.password).digest('hex')
    console.log(user, '---------')
    const userInfo = await ctx.model.User.create(user)
    ctx.status = 200;
    ctx.body = {
      msg: '注册成功',
      user_id: user.user_id,
      flag: true
    }
    return userInfo.dataValues
  }
}

module.exports = UserService