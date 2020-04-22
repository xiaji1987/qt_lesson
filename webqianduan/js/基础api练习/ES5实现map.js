Array.prototype.myMap = (fn, context) => {
  let arr = Array.prototype.slice.call(this)
  let mapArr = []
  for (let i = 0; i < arr.length; i++) {
    mapArr.push(fn.call(context, arr[i], i, this))
  }
  return mapArr
}