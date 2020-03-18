Function.prototype.myApply = function (context, ...args) {
  if (this == Function.prototype) {
    return undefined
  }
  if (Object.toString.call(args) !== Array) {
    return
  }
  const fn = Symbol();
  context[fn] = this
  const result = context.fn(...args)
  delete context[fn]
  return result
}

Function.prototype.newApply = function(context, ...args) {
  if(Object.prototype.toString.call(args) != '[object Array]') {
    return
  }
  context[fn] = this
  const res = context[fn](...args)
  delete context[fn]
  return res
}