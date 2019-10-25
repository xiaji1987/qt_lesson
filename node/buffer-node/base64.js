const obj = {alg: 'sha2560', type: '123' }

const buf = Buffer.from(JSON.stringify(obj))
console.log(buf.toString('base64'))

const base64 = buf.toString('base64')
const buf1 = Buffer.from(base64, 'base64')
console.log(buf1.toString('utf-8'))

const fs = require('fs')
