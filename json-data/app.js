const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // res.end('hello world');

    if (req.url == '/') {
        // res.end('首页');
        let stream = fs.createReadStream(__dirname + '/index.html');
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        stream.pipe(res);
    } else if (req.url == '/book') {
        // console.log()
        //json
        res.setHeader('Content-Type', 'text/json;charset=utf-8');
        const data = {
            "name": "Node.js 入门示例",
            "description": "学好node, 做全栈开发",
            "date": "2019-8-23"
        }
        const result = JSON.stringify(data);
        res.end(result);
    }
}).listen(1314);