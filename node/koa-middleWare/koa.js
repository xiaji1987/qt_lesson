const Koa = require('./Mykoa')
const app = new Koa()

app.use(async (ctx, next) => {
  console.log(1)
  await next();
  console.log(2)
})

app.use(async (ctx, next) => {
  console.log(3)
  await next();
  console.log(4)
})

app.use(async (ctx, next) => {
  console.log(5)
  await next();
  console.log(6)
})

// app.run()
const http = require('http')
http.createServer((req, res) => {
  app.run()
})
// app.listen(3000, () => {
//   console.log('3000端口启动')
// })