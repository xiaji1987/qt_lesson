// function foo() {
//   var a = 1
//   var d = {
//     name: '极客时间'
//   }
//   function showName() {
//     return a || d.name
//   }
//   showName()
// }
// foo()

// function m1() {
//   var a = 1
//   return function() {
//     console.log(++a)
//   }
// }

// m1()()
// m1()()
// m1()()

// var m2 = m1()
// m2()
// m2()
// m2 = null
// console.log(m2)
// m2 = m1()
// m2()
// m2()
