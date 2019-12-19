import "reflect-metadata"
import Koa from 'koa'
import { useControllers } from 'koa-controllers'

const app = new Koa()
useControllers(app, __dirname + '/controllers/*.ts', {
  multipart: {
    dest: './uploads'
  }
})

app.listen(3000)