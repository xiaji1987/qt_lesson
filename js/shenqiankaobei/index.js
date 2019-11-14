// let a = 'wn'
// let b = a
// console.log(b)

// a = '蜗牛'
// console.log(a)
// console.log(b)

// let a = {
//   name: 'wn',
//   book: {
//     title: 'You Dont jone js',
//     price: '45'
//   }
// }

// let b = a
// console.log(b)

// a.name = '班长'
// a.book.price = '55'
// console.log(a)
// console.log(b)

// let b = Object.assign({}, a)
// console.log(b)

// a.name = "班长"
// a.book.price = '100'
// console.log(a)  { name: '班长',book: { title: 'You Dont jone js', price: '100' } }
// console.log(b)  { name: 'wn',book: { title: 'You Dont jone js', price: '100' } }


// let b = {...a}
// console.log(b)

// a.name = "班长"
// a.book.price = '100'
// console.log(a)   { name: '班长',book: { title: 'You Dont jone js', price: '100' } }
// console.log(b)  { name: 'wn',book: { title: 'You Dont jone js', price: '100' } }

// let a = [0, '1', [2, 3]]
// let b = a.slice(1)
// console.log(b)
// a[1] = '22'
// a[2][0] = 4

// console.log(a) [ 0, '22', [ 4, 3 ] ]
// console.log(b) [ '1', [ 4, 3 ] ]

// let a = {
//   name: 'asd',
//   info: {
//     age: 23,
//     sex: 'man'
//   }
// }

// let b = Object.create(a)
// b = b.__proto__

// a.name = "123"
// a.info.age = 30
// console.log(a) { name: '123', info: { age: 30, sex: 'man' } }
// console.log(b) { name: '123', info: { age: 30, sex: 'man' } }