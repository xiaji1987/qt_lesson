function debounce(fn, wait) {
  let timer = null
  return function () {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(fn, arguments)
    }, wait)
  }
}