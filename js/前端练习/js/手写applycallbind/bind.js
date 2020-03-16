Function.prototype.myBind = function(context, ...args1) {
  const _this = this
  return function F(...args2) {
    return _this.apply(context, args1.concat(args2))
  }
}


Function.prototype.mybind = function(context, ...args1) {
  const that = this
  return function F(...args2) {
    return that.apply(context, args1.concat(args2))
  }
}