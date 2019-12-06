const net = require('net')
const http = require('http')
const server = net.createServer();
const httpServer = http.createServer((req, res) => {
  res.end('hello, I am http server');
  throw new Error('error');
})
// http.listen()

server.on('connection', (socket) => {
  // socket.on('data', (data) => {
  //   console.log('server receive:', data);
  //   socket.write('hi iiii');
  // })
  httpServer.emit('connection', socket)
})
server.listen(8181, () => {
  console.log('server is running ');
})