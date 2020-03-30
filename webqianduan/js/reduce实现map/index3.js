Array.prototype.map = function(cb) {
  let that = this
  return that.reduce((arr, item) => {
    arr.push(cb(item))
    return arr
  }, [])
}

let m = [1, 2, 3, 4].map((a) => {
  return a * a
})

console.log(m)