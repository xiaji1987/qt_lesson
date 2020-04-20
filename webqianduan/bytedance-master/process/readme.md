 - 前端的角度 来看待进程和线程
 - node 进程

1. 从前端角度开始
  Node.js单线程？
  是(你就挂了)
  js是单线程 html,css,js, .vue .jsx node koa
  java 主线程 
  基于事件机制 event loop 回调 另一种解决了能力
  单线程 js
  ajax 微软公司
  新的线程创建出来的 ajax 单线程
  JS单线程，但是JS宿主的浏览器(容器)， 多线程(http并发 img css html js), 多线程
  注册的主线程event事件里
  线程间可以互相通信

2. node 当前main.js 进程《=》， process pid
  服务器端天生多线程， 分布式的
  js在服务器端执行 单线程
  node 是服务器端js执行  容器  node是多线程
  单线程 异步 IO高性能并发

js 单线程，容器 浏览器是多进程 多线程的
node.js 容器 node 高并发