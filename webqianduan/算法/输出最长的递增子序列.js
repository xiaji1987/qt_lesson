function getMore(arr) {
  let low = 0;
  let high = 0;
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] > arr[i - 1]) {
      high = i
      newArr = newArr.length > arr.slice(low, high + 1).length ? newArr : arr.slice(low, high + 1)
    } else {
      low = i
      console.log(low)
    }
  }
  if(newArr.length == 0) {
    newArr = arr
  }
  return newArr
}

console.log(getMore([1, 2, 4, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 10]))