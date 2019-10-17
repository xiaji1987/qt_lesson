const http = require('http')
http.createServer((req, res) => {
  if(req.url === '/api/books') {
    console.log('你进去了')
    let list = [{book1: 'bk1'},{book2: 'bk2'}]
    res.end(`getBook(${JSON.stringify(list)})`)
  }
}).listen(3002, () => {
  console.log('server is running')
})