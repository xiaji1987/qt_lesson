let arr  = [1, [2, 3, 4, [5, 6, 7, [8], 9], 10, [11], 12, [13]]]

let newarr = []
function deep(arr) {
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      deep(arr[i])
    } else {
      newarr.push(arr[i])
    }
  }
  return newarr
}

console.log(deep(arr))

let newArr1 = []
function scope(arr) {
  let b = [arr]
  while(b.length > 0){
    let a = b.shift()
    for (let i = 0; i < a.length; i++) {
      if(Array.isArray(a[i])) {
        b.push(a[i])
      }else {
        newArr1.push(a[i])
      }
    }
  }
}
scope(arr)
console.log(newArr1)