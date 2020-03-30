setTimeout(() => {
  console.log("log-timeout")
},0)

const promise = new Promise((resolve) => {
  console.log('log=promise')
  resolve('promsie resolve')
})

(async () => {
  console.log('async start')
  const str = await promise
  console.log(str)
})()

promise.then(() => {
  console.log("log-promise1-then")
})

console.log("log-end")