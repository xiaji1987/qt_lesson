# 什么是闭包
有权访问访问另一个函数作用域的函数

# 如何回收变量
function makeFactor(name) {
  var p = new Bar(name)
  return function() {
    return {
      create: p,
      destory: function() {
        p = null
      }
    }
  }
}