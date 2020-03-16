const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    console.log('接收到了')
    res.end('xiaji')
  }
})

server.listen(4201, () => {
  console.log('server run 4201')
})