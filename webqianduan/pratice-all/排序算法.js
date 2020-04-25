let arr = [1, 6, 9, 7, 3, 4, 2, 8, 0, 5]
// 1. 冒泡 O(n ^ 2)
function bubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  console.log(arr)
}

// bubleSort(arr)

// 2. 快速排序
function quickSort(arr, left, right) {
  if(left >= right) {
    return
  }
  let stand = arr[left]
  let j = left
  for (let i = left + 1; i <= right; i++) {
    if(arr[i] < stand) {
      j++
      swap(arr, i, j)
    }
  }
  swap(arr, left, j)
  quickSort(arr, left, j - 1)
  quickSort(arr, j + 1, right)
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// quickSort(arr, 0, arr.length)

// 3. 归并排序
function mergeSort(arr) {
  if(arr.length <= 1) return arr
  let midIndex = Math.floor(arr.length / 2)
  let left = arr.splice(0, midIndex)
  let right = arr
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let res = []
  while(left.length > 0 && right.length > 0) {
    res.push(left[0] < right[0] ? left.shift() : right.shift())
  }
  return res.concat(left, right)
}
// console.log(mergeSort(arr))

// 4. 堆排
function headSort(arr) {
  let len = arr.length
  for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    heapify(arr, i, len)
  }
  for (let i = len - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapify(arr, 0, i)
  }
  console.log(arr)
}

function heapify(arr, start, end) {
  let dad = start
  let son = 2 * dad + 1
  if(son >= end) {
    return
  }
  if(son + 1 < end && arr[son] < arr[son + 1]) {
    son += 1
  }
  if(arr[son] > arr[dad]) {
    swap(arr, son, dad)
    heapify(arr, son, end)
  }
}

// headSort(arr)