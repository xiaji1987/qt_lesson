const cpus = require('os').cpus();
const net = require('net');
const socketServer = net.createServer();
const { fork } = require('child_process');
socketServer.listen(4444, () => {
  console.log('server is running 4444');
})
console.log('length:', cpus.length);

for (let i = 0; i < cpus.length; i ++) {
  createWork();
}
function createWork() {
  const work = fork('work.js');
  work.on('message', function(msg){
    const { act } = msg
    if (act === 'dead') {
      createWork();
    }
  })
  work.send('server1', socketServer);
  console.log('work process created');
}
