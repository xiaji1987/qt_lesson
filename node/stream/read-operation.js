const fs = require('fs');
//require 模块引入机制
// IO
fs
    //创建一个可读流
    .createReadStream('./sample.txt')
    //构建一个管道
    .pipe(process.stdout);//输出设备的一种 交互