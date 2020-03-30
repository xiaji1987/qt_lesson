function compose(middleware) {
  return function(ctx, next) {
    let index = -1
    return dispatch(0)
    function dispatch(i) {
      index = i
      let fn = middleware[i]
      if(i == middleware.length) {
        fn = next
      }
      if(!fn) return
      return fn(ctx, next(() => {
        return dispatch(i + 1)
      }))
    }
  }
}