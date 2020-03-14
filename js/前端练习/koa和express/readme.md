Koa 和 express
区别:
  Koa的中间件采用洋葱模型、所有请求都都会中间件执行两次
  koa采用try catch进行处理异常
  新增了context对象来代替express中的response和request

  express的中间件是直线模型相应返回不会回到原来的中间件，通过监听response.writeHead获得返回的数据
  处理异常用err-first