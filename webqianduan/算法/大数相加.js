let num1 = '1'
let num2 = '8'

function MaxNumber(num1, num2) {
  let result =  [0]
  let arr1 = num1.split('').map(Number)
  let arr2 = num2.split('').map(Number)
  let len = arr1.length > arr2.length ? arr1.length : arr2.length
  arr1.reverse()
  arr2.reverse()
  for (let i = 0; i < len; i++) {
    let temp
    if(arr1[i] == null) {
      temp = arr2[i] + (result[i] == null ? 0 : result[i])
    } else if (arr2[i] == null) {
      temp = arr1[i] + (result[i] == null ? 0 : result[i])
    } else {
      temp = arr1[i] + arr2[i] + (result[i] == null ? 0 : result[i])
    }
    if(temp >= 10) {
      temp = temp % 10
      result[i + 1] = 1
    }
    result[i] = temp
  }
  console.log(result.reverse().join(''))
}

MaxNumber(num1, num2)