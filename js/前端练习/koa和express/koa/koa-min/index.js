const Koa = require('./app')
const app = new Koa
app.use(async (ctx, next) => {
  console.log('1')
  await next()
  console.log('2')
})
app.use(async (ctx, next) => {
  console.log('3')
  await next()
  console.log('4')
})
app.use(async (ctx, next) => {
  console.log('5')
  await next()
  console.log('6')
})
app.listen(4321, () => {
  console.log('server is run 4321')
})