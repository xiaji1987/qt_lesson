// 代理 浏览器
var proxy = new Proxy({},{
  get: function(obj, prop) {
    console.log(obj);
    console.log('设置get');
    return obj[prop];
  },
  set: function(obj, prop, value) {
    console.log('设置set');
    obj[prop] = value;
  }
});
proxy.time = 35;
console.log(proxy.time);