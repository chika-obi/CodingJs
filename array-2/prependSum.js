function prependSum(nums) {
  if (nums.length < 2) {
    return nums;
  }

  const sum = nums[0] + nums[1];
  nums.splice(0, 2, sum);

  return nums;


// Test cases
console.log(prependSum([1, 2, 4, 4]));    // Should return [3, 4, 4]
console.log(prependSum([3, 3, 0]));       // Should return [6, 0]
console.log(prependSum([1, 1, 1, 1, 1])); // Should return [2, 1, 1, 1]
}