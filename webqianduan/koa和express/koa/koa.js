const Koa = require('koa')
const KoaRouter = require('koa-router')

const app = new Koa()
const router = new KoaRouter()

router.get('/', async (ctx, next) => {
  ctx.body = 'hello koa'
})

app.use(router.routes())

app.listen(4050, () => {
  console.log('koa已在 4040端口run')
})