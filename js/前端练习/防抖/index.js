function doc(fn, wait) {
  let timeout = null
  return function () {
    clearTimeout(time)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}

