1. 双方属于closed状态，服务期监听某端口进入listen状态
2. 客户端大气连接，发送STN，自己变成STYN-SENT状态
3. 服务端接收到返回SYN和ACK
4. 客户端再发送ACK，改变自身状态

