VUE REACt SPA Single Page Application 应用体验更好， 页面白一下
传统网页 链接把网站组织起来 重新加载新的页面， 新的http请求
/about req, res 过程
req /about
事件 网络传输时间， 01二进制， 电频信号 光速 + node/java/python 后端代码， 查数据库执行的时间， 把html 返回回去 = 白屏时间 状态码100 - 200
1.5s 用户就会离开， 0.1s 1000W
res /about about.html

路由是独立的
- 网站MVC 应用(Vue App) 应用的体验产生了路由 解决了白屏问题
VueRouter 就来了
  hashRouter
  #/shop #/
  优点是 ie8以上都支持
  缺点: 路由不纯粹 /shop
  HistoryRouter history 历史的 /shop 访问的历史， 记录
  VUERouter 两种实现方式 = HashRouter(兼容性) + HistoryRouter(长得好， 移动兼容性还没问题)