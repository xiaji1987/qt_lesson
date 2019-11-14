// let a = {
//   name: 'wn',
//   book: {
//     title: "You konw js",
//     price: '45'
//   }
// }

// let b = JSON.parse(JSON.stringify(a))
// console.log(b)
// a.name = '蜗牛'
// a.book.price = '55'
// console.log(b)

// b: { 
//   "name": "wn",
//   "book": {
//     "title": "You konw js",
//     "price":"45"
//   }
// }

let a = [0, '1', [2, 3]]
let b = JSON.parse(JSON.stringify(a.slice(1)))
console.log(b) [ '1', [ 2, 3 ] ]
a[1] = '22'
a[2][0] = 4
console.log(b) [ '1', [ 2, 3 ] ]

