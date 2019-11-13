const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const md5 = require('md5')

app.get('/', (req, res) => {
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div>你好</div>
    <script src="/demo.js"></script>
  </body>
  </html>
  `)
})
app.get('/demo.js', (req, res) => {
  console.log('这里被请求了')
  const jsPath = path.resolve(__dirname, './demo.js')
  const content = fs.readFileSync(jsPath)
  const mtime = fs.statSync(jsPath).mtime.toUTCString()
  if (mtime === req.headers['if-modified-since']) {
    res.writeHead(304, 'Not Modified')
    res.end()
    return false
  }
  res.setHeader('Last-Modified', mtime)
  res.setHeader('Cache-Control', 'public,max-age=30')
  res.end(content)
})
app.listen(8090, () => {
  console.log('在8090端口')
})