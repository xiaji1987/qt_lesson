global.gc();
console.log(process.memoryUsage());
let key = new Array(5 * 1024 * 1024); // 1
console.log(process.memoryUsage());
let map = new Map();
map.set(key, 1);// 2
map.delete(key); // -1
key = null; // -1;
global.gc();
console.log(process.memoryUsage().heapUsed);