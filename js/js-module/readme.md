## AMD
异步模块化的一个方案
代表: require.js
define 定义
require 引入

## CMD
代表作 Sea.js 玉伯

## 共同点
都能异步加载

## 区别
1. AMD会提升所有的require， 只要依赖的模块就回加载
2. CMD按照代码顺序执行

## UMD
通用模块
AMD + Common.js
'''js
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Vue = factory());
}(this, function () {}))

(function() {})()
// node 
module.exports.a = a;
// AMD 以前的
