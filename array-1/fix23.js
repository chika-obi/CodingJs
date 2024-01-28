function fix23(nums) {
  if (nums[0] === 2 && nums[1] === 3) {
    nums[1] = 0;
  } else if (nums[1] === 2 && nums[2] === 3) {
    nums[2] = 0;
  }
  return nums;


// Test cases
console.log(fix23([1, 2, 3]));  // Should return [1, 2, 0]
console.log(fix23([2, 3, 5]));  // Should return [2, 0, 5]
console.log(fix23([1, 2, 1]));  // Should return [1, 2, 1]
}