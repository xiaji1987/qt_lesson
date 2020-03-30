function dobounce(fn, wait) {
  let run = true
  return function () {
    if(!run) return
    run = false
    setTimeout(() => {
      fn.apply(this, arguments)
      run = true
    }, wait)
  }
}