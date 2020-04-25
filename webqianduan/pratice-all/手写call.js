Function.prototype.myCall = function(context, ...args) {
  context = context || window
  args = args ? args : []
  const key = Symbol()
  context[key] = this

  let res = context[key](...arsg)
  delete context[key]
  return res
}