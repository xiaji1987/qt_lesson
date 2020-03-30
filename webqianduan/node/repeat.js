function repeat(func, times, wait) {
  return async function () {
    for (let i = 0; i < times; i++) {
      func.apply(null, arguments)
      await waitTime(wait)
    }
  }
}

function alert(args) {
  console.log(args)
}

function waitTime(wait) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, wait)
  })
}

const repeatFunc = repeat(alert, 4, 3000)

repeatFunc('hello world')