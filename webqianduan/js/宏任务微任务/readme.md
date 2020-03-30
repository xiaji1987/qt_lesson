node.js循环机制
node去执行同步代码、异步非I/O代码，异步I/O代码则有主席那成分配给线程池的子任务进行，执行完毕后将函数回调给主席那成执行，整个过程事件循环连接。

node.js轮询的阶段
1. timers阶段，这个阶段执行定时器中的回调
2. I/O callback: 这个阶段几乎所有的回调，但是不包括close事件，定时器和setImmediate()回调
3. idle,prepare:这个阶段仅在内部使用
4. poll等待新的I/O事件，node在一些特殊情况下阻塞在这里
5. check: setTmmedidate()回调会在这个阶段执行
6. close callbacks