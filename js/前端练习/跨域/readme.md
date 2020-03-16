解决方案:
1. JSONP实现，前端实现定义好一个用于获取跨域相应的回调函数，通过script标签发起，然后返回这个回调函数执行，相应的数据放到回调参数里，前端script标签请求到这个执行的回调函数立马执行，拿到相应数据
缺点: 
- JSONP只能发起GET请求
- JSONP安全问题 XSS攻击 CSRF攻击

2. cors(跨域共享)
浏览器加上请求同: origin字段
Access-Control-Allow-Origin: 允许的源，请求的网址
Access-Control-Allow-Methods: 允许的方法
Access-Control-Allow-Headers: 允许的头部
Access-Control-Allow-Credentials: 允许发送cookie
使用option之间，看是否需要跨域请求

3. Nginx反向代理
4. postMessage
5. document.domain