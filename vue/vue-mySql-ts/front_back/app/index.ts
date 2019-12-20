// import Koa from 'koa'
// import Koa = require('koa')
// import * as Koa from 'koa'
// import { bootstrapControllers } from 'koa-ts-controllers'
// let app = new Koa()

// bootstrapControllers(app, {
//   basePath: '/api',
//   controllers: [__dirname + '/controllers/**/*.ts'],
//   initBodyParser: true,
//   boomifyErrors: true,
//   versions: ['1', '2']
// })

// app.listen(8888, () => {
//   console.log('server is run in 8888')
// })



import * as Koa from 'koa'
import { useControllers } from 'koa-controllers'

const app = new Koa()

useControllers(app, __dirname + '/controllers/**/*.controllers.js', {
  multipart: { // 自动加载
    dest: './uploads'
  }
});



app.listen(8888, () => {
  console.log('server is run in 8888')
})