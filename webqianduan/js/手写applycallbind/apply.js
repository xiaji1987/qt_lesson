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

Function.prototype.myApply = function(context, args) {
  context = context || window
  args = args ? args : []

  const key = Symbol()
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}

function myapply(context, args) {
  context = context || window
  args = args ? args : []
  let key = Symbol()
  context[key] = this
  let res = context[key](...args)
  delete context[key]
  return res
}