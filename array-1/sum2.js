function sum2(nums) {
  if (nums.length === 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0];
  } else {
    return nums[0] + nums[1];
  }


// Test cases
console.log(sum2([1, 2, 3]));        // Should return 3
console.log(sum2([1, 1]));           // Should return 2
console.log(sum2([1, 1, 1, 1]));     // Should return 2
console.log(sum2([]));               // Should return 0
console.log(sum2([5]));              // Should return 5
}