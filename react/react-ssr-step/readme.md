## 组件，既可以在客户端，也可以在服务端运行
同构
首屏直出
SPA:
1. <div id="app"></div>
2. js
3. js html

SPA
1. <div id="app">buy</div>
2. js 事件绑定

FP: first-paint 有像素落点的时候
FCP: first-content-paint 有内容渲染的时候
FMP: first-meaning-paint 有意义的内容

TTI: time-to-i 可交互
DCL: dom content-loaded dom 解析完成的时候
L: load 这个页面加载完的时候

虚拟
服务端：生成 html
客户端：负责事件绑定

SPA：html 事件 在客户端

## JEE ejs
服务端渲染

## node
1. 服务端渲染
2. webpack babel 工具
3. 中间层（BFF）
   client  /buy  server
   问题：
   /num    1
   /login  2
   /buy    3
   解决：
   node: backend for front
   get('/nodeBuy', async () => {
     // 内网请求
     // 速度理论上限
     // rpc
     get('/num') login buy
   })
   // 非必要
   rpc：romote process call


## 上线
···js
server: /build/bundle.js
// localhost:3000 node
// localhost:3000/login node 渲染 login 组件 html

express.static('public')

public: /public/index.js
// 作为 node 服务返回的 html 需要加载

## store
生成请求: 生成 带有 数据的 html
目的: 用户当前访问的这一页数据 都由后端生成html生成