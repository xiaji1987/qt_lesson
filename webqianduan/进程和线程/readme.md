进程: 进程狮子鱼那分配的最小单位
线程: 线程是运算调度的最小单位
一个线程只能隶属一个进程，但一个进程可以有多个线程
线程共享进程的资源

单线程
单线程就是一个进程只开一个线程
- node.js是单线程，但是却高并发，避免了线程创建、线程之间上下文切换所产生的资源开销
- 项目计算过大，CPU好事操作时，要足以开启多进程来完成
- Node.js开发过程中，错误引起整个应用退出应用的健壮性值得考验，尤其错误的异常抛出，以及进程守护必须做的
- 单线程无法利用多核CPU后来，node.js提供的API和第三方工具解决了

node.js的进程和线程
在单核CPU系统上，我们采用单线程+单线程开发模式，通过child_process.fork开启多个进程，即多线程+单线程的模式，开启多线程不是为了解决高并发的问题，二是解决单线程模式下node.jsCPU利用不足的问题充分利用多喝CPU的性能

node的cluster

进程守护
使用PM2 PM2是运行进程管理


浏览器的进程
1. Browser进程 浏览器的主进程(负责协调，主控)
2. 插件进程 每种插进对应的进程，仅当插件使用才创建
3. GPU进程 用于3D绘制
4. 渲染进程 每一个页面进程，互不影响，控制页面渲染，脚本执行事件处理

渲染进程是多线程的分为以下几类
1. GUI线程 html页面的渲染
2. js脚本线程 解析js脚本
3. 事件触发线程 
4. 定时器线程
5. 网络请求线程 使用XMLHttpRequest连接服务器请求数据的