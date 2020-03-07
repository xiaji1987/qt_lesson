// var findRepeatNumber = function(nums) {
//   var arr = []
//   for (let num of nums) {
//     if (arr.indexOf(num) < 0) {
//       arr.push(num)
//     } else {
//       return num
//     }
//   }
// }

var findRepeatNumber = function(nums) {
  nums.sort((a, b) => {
    return a - b
  })
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) return nums[i]
  }
}
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))