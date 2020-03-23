function getType(type) {
  if (typeof type != 'object') {
    return typeof type
  }
  let typeofAll = {
    "[object Array]": "array",
    "[object Object]": "object",
    "[object Date]": 'date',
    "[object Null]": 'null'
  }
  return typeofAll[Object.prototype.toString.call(type)]
}

console.log(getType(12))