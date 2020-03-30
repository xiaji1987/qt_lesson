let express = require('express')

let app = new express

app.get('/', (req, res) => {
  res.send(
  `
    <html>
      <head>
        <title>hello</title>
      </head>
      <body>
        <h1>hello</h1>
        <p>world</p>
      </body>
    </html>
  `)
})
app.listen(3001, () => {
  console.log('listen: 3001')
})