var removeDuplicates = function(nums) {
  const numsSize = nums.length;
  let pointA = 0;// 慢指针
  for (let pointB = 1; pointB < numsSize; pointB++) {
    if(nums[pointA] !== nums[pointB]) { // 不一样
      pointA++
      nums[pointA] = nums[pointB]
    }
  }
  return pointA + 1
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4, 12]))