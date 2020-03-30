function myApply(context, args) {
  context = context || widows
  args = args ? args : []

  let key = Symbol()
  context[key] = this
  let res = context[key](...args)
  delete context[key]
  return res
}

function myBind(content, args) {
  let that = this
  return function (args1) {
    return that.apply(content, args.concat(args1))
  }
}