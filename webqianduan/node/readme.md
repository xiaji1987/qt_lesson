node的childProcess模块
1. exec 开启子进程
创建一个shell，在shell中执行命令
2. execFile 开启子进程
比exec效率高一些  I/o重定向，文件glob不支持
3. fork 开始一个子进程
4. spawn

.exex、.execFile、.fork底层都是通过.spawn实现的
子进程创建是异步的，它不会阻塞当前时间玄幻，提升了性能

父子进程的通信
1. 通过stdin/stdout传递json，适用于关联进程之间的通信
2. 原生IPC支持
3. sockets 最通用的方式，良好的跨环境能力
4. message queue 最强大的方式，
