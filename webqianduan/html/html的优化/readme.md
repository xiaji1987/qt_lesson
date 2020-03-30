静态资源
图片
  JPEG
    不支持透明
    颜色丰富的图片，彩色图大

html 优化细则
- 减少html的嵌套
- 减少DOM节点
- 删除http或者https，如果URL的协议头和当前的协议一致
- 采用语义化标签(aside, header, footer, section)

css链接尽量放在头部，css加载不会阻塞
js链接放在放在html底部

css细则
尽量减少层级样式
使用外链的CSS cdn缓存
尽量避免@import

js细则
DOM操作
尽量使用id选择器
使用事件节流函数
使用事件委托

js动画
尽量使用css动画
合理使用requestAnimationFrame代替setTimeout,setInterval

合理使用缓存
逻辑层面的缓存
使用可缓存Ajax

减少使用回流重绘

前端构建工具
Gulp
功能片任务，通过流来简化多个任务间的配置，配置代码相对输出和配置，配置的代码