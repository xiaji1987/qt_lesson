let arr = [1, '2', [3, [4, '5']]]

let count = 0
function getSum(arr){
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] == 'number') {
      count += arr[i]
    } else if (Array.isArray(arr[i])) {
      getSum(arr[i])
    }
  }
  return count
}
console.log(getSum(arr))