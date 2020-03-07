var findLengthOfLCIS = function(nums) {
  if (nums.length <= 1) {
    return  nums.length
  }
  var count = 1
  var maxCount = 1
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      count++
    } else {
      count = 1
    }
    maxCount = Math.max(maxCount, count)
  }
  return maxCount
}

console.log(findLengthOfLCIS([1,3,5,7]))