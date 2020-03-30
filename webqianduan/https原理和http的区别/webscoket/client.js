const ws = new WebSocket('ws://loaction:8888')

ws.onopen(() => {
  console.log('连接上了')
})

ws.onmessage((e) => {
  console.log(e)
  console.log(e.data)
})

ws.onclose(() => {
  console.log('关闭连接')
})

ws.onerror((e) => {
  console.log('报错'+e)
})