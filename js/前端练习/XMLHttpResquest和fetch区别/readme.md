fetch: 是基于XMLHttpResquest的
可以很容易地被其他技术使用，例如 Service Workers (可以在 SW 监听的浏览器发出的请求，可以在中间做个代理，用 fetch 发出这个请求)

fetch
  缺少使用内置方法来使用文档
  没有办法设置超时
  无法覆盖响应的内容类型标头
XHR
  除了使用非标准标志或构造函数之外，没有办法不发送cookie mozAnonAnonXMLHttpRequest
  无法返回FormData实例
  没有相当于fetch的no-cors模式