-callback
    回头一笑    
    add.eventListener(event_type,callback);
定义时，不执行，注册了
事件发生时，将注册的回调函数拿回来执行一下 异步问题

-fs 文件模块
    异步是需要花时间的，注册行为,callback err
-操作系统
    add.EventListener 事件监听 I/O操作
    Input/Output CPU(运算和指令集) 内存，外部存储设备 典型的慢操作
    fs.readFile(path,'utf-8',callback)