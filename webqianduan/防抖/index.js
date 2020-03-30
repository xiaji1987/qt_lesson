function doc(fn, wait) {
  let timeout = null
  return function () {
    clearTimeout(time)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}


function doc(fn, wait) {
  let time = null
  return function () {
    if(time) clearTimeout(time)
    time = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}
