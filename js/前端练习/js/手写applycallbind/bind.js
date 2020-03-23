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

Function.prototype.newBind = function(context, ...args1) {
  let self = this
  return function (...args2) {
    return self.apply(context, args1.concat(args2))
  }
}

Function.prototype.myBind = function (context, ...args) {
  let that = this
  args = args ? arsg : []
  return function (...args1) {
    return that.apply(context, args.concat(args1))
  }
}