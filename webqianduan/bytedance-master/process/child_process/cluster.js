const http = require('http')
const numCPUS = require('os').cpus().length
const cluster = require('cluster')

if(cluster.isMaster) {
  // 是主进程
  console.log(numCPUS)
  for(let i = 0; i < numCPUS; i++) {
    cluster.fork()
  }
} else {
  // web天生就是主进程
  http.createServer((req, res) => {
    res.writeHead(200)
    res.end(`hello process id ${process.pid}`)
  }).listen(3246)
}