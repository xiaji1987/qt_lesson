// console.log('鸭子模型1');
// 服务器 http://localhost:8080/ 一直给用户提供服务
const http=require('http');//http协议
const server=http.createServer((req,res)=>{
    res.end('Hello World');
});
server.listen(1314);