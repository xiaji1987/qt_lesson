const Koa = require('koa')
const config = require('./config')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

// 解析请求体
app.use(bodyParser())
const router = require('./routes/index')

app.use(router.routes())

app.listen(config.port, () => {
  console.log(`server is started in at port ${config.port}`)
})