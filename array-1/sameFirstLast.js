function sameFirstLast(nums) {
  return nums.length >= 1 && nums[0] === nums[nums.length - 1];

// Test cases
console.log(sameFirstLast([1, 2, 3]));    // Should return false
console.log(sameFirstLast([1, 2, 3, 1])); // Should return true
console.log(sameFirstLast([1, 2, 1]));    // Should return true
}