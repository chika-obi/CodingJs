function isEverywhere(nums, val) {
  // Check if the value is everywhere in the array
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== val && nums[i + 1] !== val) {
      return false;
    }
  }
  return true;


// Test cases
console.log(isEverywhere([1, 2, 1, 3], 1));       // Should return true
console.log(isEverywhere([1, 2, 1, 3], 2));       // Should return false
console.log(isEverywhere([1, 2, 1, 3, 4], 1));    // Should return false
}