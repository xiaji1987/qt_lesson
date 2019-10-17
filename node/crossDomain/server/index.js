const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static')
const path = require('path')

const app = new Koa()
app.use(KoaStatic(path.join(__dirname), './static'))

var router = new KoaRouter() 

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:51155')
  ctx.set('Access-Control-Allow-Methods', 'POST,GET,DELETE>OPTIONS')
  ctx.set('Access-Control-Allow-Headers', 'Content-Type,X-cutume')
  // 允许 是否发送 cookie ... 凭证
  ctx.set('Access-Control-Allow-Credentials', true)
  await next();
})

router.post('/api/books', (ctx, next) => {
  console.log(ctx.cookies.get('hello'))
  // ctx.router available
  ctx.body = [
    {bookName: 'php 入门到精通'},
    {bookName: 'node 入门到精通'}
  ]
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3001, () => {
  console.log('server is runing http://localhost:3001')
})
