https的原理
https对传输数据进行加密，使用非对称加密算法
内容使用对称加密

1. 而客户端发起https请求
2. 服务端的配置
3. 传递证书 就是公钥
4. 客户端解析证书
5. 传送加密信息
6. 服务端揭秘信息
7. 传送加密后的信息
8. 客户端解密信息

区别:
- https协议需要CA申请证书
- http协议传输数据都是未加密的，就是明文传输，https则具有安全性的SSl加密传输协议
- http和https使用的完全不同的连接方式，用的端口号不一样，http:80, https:443
- http连接是无状态的，https协议是由SSL+http协议构建的可进行加密传输，身份认证的网络协议，比http协议安全


http1 和 http2 区别
http2支持二进制传输， http1文本传输
http2使用多路复用，代替了http1的序列和阻塞
http2采用hpack压缩算法压缩头部。减小传输体积
http2支持服务端推送




客户端与服务端保持联系
1. ajax轮询 每隔一段时间向服务器发起一次请求
2. long poll长轮询 在http1.0中加入connection: keep-active
3. iframe 长连接 在src标签中内嵌一个iframe标签
4. webScoket