var curry = function(fn) {
  let arr = []
  let len = fn.length
  return function next(...args) {
    arr = arr.concat(args)
    if(arr.length >= len) {
      let temp = arr
      arr = []
      return fn(...temp)
    } else {
      return next
    }
  }
}