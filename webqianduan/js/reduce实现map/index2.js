Array.prototype.myMap = function(cb) {
  let that = this
  return that.reduce((arr, i) => {
    arr.push(cb(i))
    return arr
  }, [])
}

let m = [1, 2, 3].myMap((a) => {
  return a * a
})
console.log(m)