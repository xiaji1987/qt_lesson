var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]
var arr1 = arr
arr1[1] = '浅'
arr1[4].old = 3
var new_arr = JSON.parse( JSON.stringify(arr) );

new_arr[0] = 'new'
new_arr[4].old = 2

console.log(arr);
console.log(arr1);
console.log(new_arr);

// 手写深拷贝

function cloneDeep(obj) {
  let t = {};
  Object.keys(obj).forEach(k => {
    if (typeof obj[k] === 'object') {
      t[k] = cloneDeep(obj[k])
    } else {
      t[k] = obj[k];
    }
  })
  return t
}

// console.log(cloneDeep(arr))

function deep(obj) {
  let newobj = {}
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] == 'Object') {
      newobj[key] = deep(obj[key])
    } else {
      newobj[key] = obj[key]
    }
  })
  return newobj
}