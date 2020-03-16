function mycompose(mid) {
  return function(ctx, next) {
    let index = -1
    return dispatch(0)
    function dispatch(i) {
      index = i
      let fn = mid[i]
      if(i == mid.length) {
        fn = next
      }
      if(!fn) return
      return fn(ctx, function next() {
        return dispatch(i + 1)
      })
    }
  }
}

module.exports = mycompose
