const mysql = require('mysql')
const redis = require('redis')

const connection = mysql.createConnection({
  host: '192.168.1.143',
  user: 'root',
  password: '849072',
  database: 'koa_blog'
})

const clent = redis.createClient({
  host: '192.168.1.143'
})

const http = require('http')

http.createServer((req, res) => {
  connection.query('select * from users', (err, result) => {
    if(err) {
      console.log(err)
    }
    client.set('users', JSON.stringify(result))
    res.end(JSON.stringify(result))
  })
}).listen(9090, () => {
  console.log('server run 9090')
})