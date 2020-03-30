function doc (fn, wait) {
  let run = true
  return function () {
    if (!run) return
    run = false
    setTimeout(() => {
      fn.apply(this, arguments)
      run = true
    }, wait)
  }
}

function func() {
  console.log(1111)
}

doc(func, 1000)


function doc(fn, wait) {
  let run = true
  return function() {
    if (!run) return
    run = false
    setTimeout(() => {
      fn.apply(this, arguments)
      run = true
    },wait)
  }
}

function myDoc(fn, wait) {
  let run = true
  return function () {
    if(!run) {
      return
    }
    run = false
    setTimeout(() => {
      fn.apply(this, arguments)
      run = true
    }, wait)
  }
}