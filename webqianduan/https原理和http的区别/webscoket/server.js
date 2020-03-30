const Koa = require('koa')
const webscoket = require('ws')

const app = new Koa
const ws = new webscoket.Server({port: 8888})

ws.on('connection', ws => {
  console.log('connection serevr')
  ws.on('message', msg => {
    console.log('server receive msg：', msg)
  })
  ws.send('server shoudao')
})

app.listen(3001, () => {
  console.log('server is run')
})