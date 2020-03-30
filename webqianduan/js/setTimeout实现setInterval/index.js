function repeat() {
  return async function (wait) {
    let j = 1
    for (let i = 0; i < j; i++) {
      j++
      console.log(123)
      await waitTime(wait)
    }
  }
}

function waitTime(wait) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, wait)
  })
}

const repeatFunc = repeat()

repeatFunc(0)