const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  setTimeout(() => {
    res.end('hello')
  }, 1000)
})

server.listen(3333, () => {console.log('运行在3333')})