function bigDiff(nums) {
  let minVal = nums[0];
  let maxVal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    minVal = Math.min(minVal, nums[i]);
    maxVal = Math.max(maxVal, nums[i]);
  }

  return maxVal - minVal;


// Test cases
console.log(bigDiff([10, 3, 5, 6]));    // Should return 7
console.log(bigDiff([7, 2, 10, 9]));     // Should return 8
console.log(bigDiff([2, 10, 7, 2]));     // Should return 8
}