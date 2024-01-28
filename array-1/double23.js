function double23(nums) {
  return (nums.length === 2) && ((nums[0] === 2 && nums[1] === 2) || (nums[0] === 3 && nums[1] === 3));

// Test cases
console.log(double23([2, 2]));  // Should return true
console.log(double23([3, 3]));  // Should return true
console.log(double23([2, 3]));  // Should return false
}