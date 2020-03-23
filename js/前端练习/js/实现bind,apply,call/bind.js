Function.prototype.myBind = function (context, ...args) {
  const fn = this
  args = args ? args : []
  return function newFn(...newFnArgs) {
    return fn.apply(context, [...args,...newFnArgs])
  }
}