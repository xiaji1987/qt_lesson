const mysql = require("mysql")

const pool = mysql.createPool({
  user: 'root',
  password: '990704',
  host: '127.0.0.1',
  port: '3306',
  database: 'chat'
})

let query = function(sql, value) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connect) => {
      if (err) {
        reject(err)
      }
      connect.query(sql, value, (err, rows) => {
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
        connect.release()
      })
    })
  })
}

module.exports = {
  query
}