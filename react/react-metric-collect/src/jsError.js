window.addEventListener('error', (event) => {
  console.log(event)
  event.preventDefault()
})

document.addEventListener('error', event => {
  console.log('资源错误', event)
}, true)

window.addEventListener('unhandledrejection', (error) => {
  console.log(error)
})