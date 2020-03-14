XSS攻击 js脚本注入攻击

1. 存储型
恶意代码随着用户的请求发送到服务器上，获取数据

2. 反射性
请求的url带有恶意的代码

3. DOM型
恶意脚本注入到用户页面，网络劫持，修改后端返回的html内容

解决办法
1. 过滤、编码

2. 充分利用CSP， 只加载本域资源，和指定域的资源

3. cookie 使用HttpOnly属性


csrf攻击 跨站进行伪造
伪造用户的什么，发出信息和获取信息

办法
1. 充分利用cookie的SameSite

2. 验证请求的站点

3. CSRF Token 浏览器发起请求，服务器生成一个字符串
第二步 在浏览器发起接口请求携带字符串进行验证


cookie session localstoge sessionLocalstoge他们的区别是啥
