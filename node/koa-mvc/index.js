const Koa = require('koa')
const KoaBodyParser = require('koa-bodyparser')
const app = new Koa()
const router = require('./router/index')
// ctx.request.body
app.use(KoaBodyParser())
app.use(async (ctx, next) => {
  console.log(123)
  // http://localhost:8080/
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  ctx.set('Access-Control-Allow-Headers', 'X-custume, Content-Type');
  // 允许 是否发送 cookie ...凭证
  ctx.set('Access-Control-Allow-Credentials', true);
  ctx.body = 1243;
  await next();
})

app.use(router.routes()).use(router.allowedMethods)
app.listen(3003, () => {
  console.log('server is running in 3003')
})