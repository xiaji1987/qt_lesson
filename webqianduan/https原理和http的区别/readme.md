https的原理
https对传输数据进行加密，使用非对称加密算法
内容使用对称加密

1. 客户给银行发一个随机数，client-hello
2. 银行回复一个随机数，server-hello
3. 银行给用户发证书
4. 客户也可能会发一个证书给银行
5. 客户和银行互相查看校验对方身份
6. 相互校验没问题，就可以放心的交流了，客户给银行再发一个随机数pre-master
7. 这时候双方都有三个随机数，根据他们生成对称算法的密钥
8. 就通过这个密钥以对称加密的传输信息了

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
2. long poll长轮询 在http1.0中加入connection: keep-alive
3. iframe 长连接 在src标签中内嵌一个iframe标签
4. webScoket