优点
1. JavaScript和css 之间可以变量共享
2. css 组件化

## h5 history api vs hash
hash 后端的 不会发送给后端
刷新的时候
history api 表示
后端无论受到什么请求都 返回 index.html
app.get('*', () => {
  render(index)
})

<script src="/stattic/a.js" />
publicPath / -> ./
html: index.html
后续
ip/static/a.js
没有拦截到
location / {
  root /user/share/nginx/html
}