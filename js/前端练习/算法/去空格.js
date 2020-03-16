// 1.
var str = '  abc d e f  g ';
function trim (str) {
  var arr = str.split(' ')
  return arr.join("")
}
console.log(trim(str))

// 2. 
// var trim = function(str){
//   return str.replace(/\s*/g,"");
// }
// console.log(trim)