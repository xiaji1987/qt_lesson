Array.prototype.map = function (callback) {
  var arr = this;
  return arr.reduce((acc, cur) => {
    // console.log(arr, acc, cur, '*****')
    acc.push(callback(cur));
    return acc
  }, []);
}
var m = [1, 2, 3, 4, 54].map(function (v) {
  // console.log(v, '/--/-/-')
  return v * v
});
console.log(m)