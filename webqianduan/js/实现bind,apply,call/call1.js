Function.prototype.mycall = function(context, ...args) {
  context = context || window
  args = args ? args : []

  let key = Symbol()

  context[key] = this
  let res = context[key](...args)
  delete context[key]
  return res
}

Function.prototype.mybind = function(context, args1) {
  let that = this
  return function (args2) {
    return that.apply(context, args1.concat(args2))
  }
}