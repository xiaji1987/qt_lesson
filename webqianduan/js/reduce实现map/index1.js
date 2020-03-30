Array.prototype.myMap = function(fn) {
  let that = this
  return that.reduce((arr, a) => {
    arr.push(fn(a))
    return arr
  }, [])
}

let m = [1,2,3,4,5].myMap((a) => {
  return a * a
})
console.log(m)