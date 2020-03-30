function digui(wait) {
  setTimeout(() => {
    console.log('123')
    digui(wait)
  }, wait)
}

digui(1000)