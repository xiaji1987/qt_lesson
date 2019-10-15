var { count, obj, changeValue } = require('./node-common.js')
console.log(count, obj)
changeValue()
console.log(count, obj)
// 复制
var a = 1;
var b = a;
b = 2;
var aa = {};
var bb = aa;
bb.name = 'bbname'
// common.js require 的时候 类比 js
// 基本数据类型 复杂数据类型 的复制