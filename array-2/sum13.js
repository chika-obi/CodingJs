function sum13(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 13) {
      i++; // Skip the number following 13
    } else {
      sum += nums[i];
    }
  }

  return sum;

// Test cases
console.log(sum13([1, 2, 2, 1]));        // Should return 6
console.log(sum13([1, 1]));              // Should return 2
console.log(sum13([1, 2, 2, 1, 13]));    // Should return 6
}