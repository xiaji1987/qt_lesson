Function.prototype.myBind = function (context, args1) {
  let self = this
  return function Fn(args2) {
    return self.apply(context, args1.concat(args2))
  }
}