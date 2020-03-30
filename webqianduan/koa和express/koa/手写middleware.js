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


function compose(middware) {
  return function(ctx, next) {
    let index = -1
    return dispatch(0)
    function dispatch(i) {
      i = index
      let fn = middware[i]
      if(i == middware.length) {
        fn = next
      }
      if(!fn) return
      return fn(ctx, function next(){
        return dispatch(i + 1)
      })
    }
  }
}


function compose(middleware) {
  return function(ctx, next) {
    let index = -1
    return dispatch(0)
    function dispatch(i) {
      index = i
      let fn = middleware(i)
      if (i == middleware.length) {
        fn = next
      }
      if(!fn) return
      return fn(ctx, next(() => {
        return dispatch(i + 1)
      }))
    }
  }
}