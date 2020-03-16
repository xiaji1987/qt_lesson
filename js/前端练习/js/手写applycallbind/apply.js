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