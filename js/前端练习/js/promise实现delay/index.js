const delay = (wait) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, wait)
  })
}

delay(1000).then(() => {
  console.log('123')
})