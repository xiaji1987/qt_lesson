let arr = [99, 5, 6, 7, 11, 5, 33, 1, 55, 22, 33]

// 1. 冒泡排序
// function sortArr() {
//   let lenArr = arr.length
//   for (let i = 0; i < lenArr; i++) {
//     for (let j = 0; j < lenArr - 1 - i; j++) {
//       if(arr[j] > arr[j + 1]) {
//         var temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
//   console.log(arr, count)
// }

// 2. 选择排序
function sortArr(arr) {
  var len = arr.length;
  var minIndex, temp;
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {     //寻找最小的数
        minIndex = j;                 //将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(sortArr(arr))