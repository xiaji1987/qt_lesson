const Koa = require('koa')
const { initRouter, initService, initController, loadConfig } = require('./lm-loader')

class Lm {
  constructor(conf) {
    this.$app = new Koa(conf)
    // 加载配置项
    loadConfig(this)
    this.$ctrl = initController()
    this.$service = initService()
    this.$router = initRouter(this)
    this.$app.use(this.$router.routes())
  }
  start(port) {
    this.$app.listen(port, () => {
      console.log('lm服务启动成功 端口:' + port)
    })
  }
}

module.exports = Lm