const http = require('http')
const fork = require('child_process').fork

http.createServer((req, res) => {
  const compute = fork('./fork_compute.js')
  compute.send('开启新进程吧')
  compute.on('message', sum => {
    res.end(`sum 为 ${sum}`)
  })
  
}).listen(1314, () => {console.log('主进程', process.pid)})