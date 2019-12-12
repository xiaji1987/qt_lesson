# ssr 服务端渲染
虚拟
服务端: 生成html
客户端: 负责事件绑定

SPA: html 事件 在客户端
  ## J2EE ejs
  ## node
  1. 服务端渲染
  2. webpack babel 工具
  3. 中间层(BFF)
    client /buy server
    /num 1
    /login 2
    /buy 3
    解决:
    node: backend for front
    get('/nodeBuy', async () => {
      // 内网请求
      // 速度理论上限
      get('/num) login buy
    })

# csr 客户端渲染

# MVVM dom diff
# weex

