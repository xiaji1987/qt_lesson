console.log(exports === module.exports)
var count = 3;
// typeof exports === 'object'
var obj = {
  name: "David"
}
function changeValue () {
  count++;
  obj.name = 'Tom'
}
module.exports = {
  count,
  obj,
  changeValue
}

// module.exports.count = count;
// exports.count = count;