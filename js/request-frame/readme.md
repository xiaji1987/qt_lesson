## 帧
刷新率 60HZ
60次 / 1000毫秒

##
1. 主进程
2. 插件
3. GPU
4. 渲染

## 渲染
1. js
2. http
3. 定时器
4. 事件
5. 页面绘制布局

js和 页面绘制布局 是互斥的
js 可以改变 DOM

## event loop
MacroTask(宏任务): 同步代码 setTimeout setinterval
MicroTask(微任务): Promise.then nextTick

宏任务 -> 微任务 -> 渲染 宏任务 -> 微任务 -> 渲染 宏任务 -> 微任务 -> 渲染 宏任务 -> 微任务 -> 渲染