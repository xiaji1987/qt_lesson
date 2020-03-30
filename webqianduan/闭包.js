// function add(){
//   var a = 0;
//  return function(){
//    return a++
//  }
// }
let arr = []
let i = 1
function add () {
  if (i == 1001) {
    return
  }
  console.log(i)
  arr[i] = i
  i++
  add()
}
add()
console.log(arr)