// 1. 防抖
function debounce(fn, wait) {
  let time = null
  return function () {
    if(time) clearTimeout(time)
    tiem = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}

// 节流
function debounce(fn, wait) {
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