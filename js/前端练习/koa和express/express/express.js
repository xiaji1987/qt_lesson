const express = require('express')
const app = express()

app.get('/', function(req, res){
  res.send('Hello Express')
})

app.listen(4040, () => {
  console.log("express 已在 4040端口run")
})