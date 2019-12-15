var fs = require('fs')
var http = require('http')

var server = http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    res.writeHead(200, { "Content-type": "text/html" })
    const myreadstream = fs.createReadStream(__dirname + '/views/http_demo.html', 'utf-8')
    myreadstream.pipe(res)
  }
})

var io = require('socket.io')(server)
io.on('connection', (socket) => {
  console.info('一个socket连接成功了')
  socket.on('link_to_server', (msg) => {
    console.info(`我接受的问题是：${msg}`)
    // socket.emit('link_to_client', 'of course')
    io.emit('link_to_client', msg)
  })
})

server.listen(8888)
console.info('server is running...')