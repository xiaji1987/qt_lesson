Function.prototypr.mycall = function (context, ...args) {
  if(this == Function.prototype){
    // 如果有恶心的用户刁钻的用户用Function.prototype，防止死循环
    return undefined;
  }
  // 让context上也有一个方法，再通过context来调用就好了
  // context不能为空
  context = context || window;
  // 给context一个属性，这个属性上挂上这个方法
  const fn = Symbol();
  // this指的就是调用call的方法
  context[fn] = this;
  const result = context[fn](...args);
  // 调用函数后即删除该Symbol属性
  delete context[fn];
  return result;
}

// 简单版本
Function.prototype.mycall = function(context, ...args) {
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}
