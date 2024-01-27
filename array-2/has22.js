function has22(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 2 && nums[i + 1] === 2) {
      return true;
    }
  }
  return false;

// Test cases
console.log(has22([1, 2, 2]));      // Should return true
console.log(has22([1, 2, 1, 2]));    // Should return false
console.log(has22([2, 1, 2]));       // Should return false
}