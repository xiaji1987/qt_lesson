let str = '1 apple 20$ cost 30$ 40$'
let map = str.match(/(\d+)(?:\$)/g)
console.log(map)