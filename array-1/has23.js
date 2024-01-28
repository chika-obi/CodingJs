function has23(nums) {
  return nums.includes(2) || nums.includes(3);

// Test cases
console.log(has23([2, 5]));   // Should return true
console.log(has23([4, 3]));   // Should return true
console.log(has23([4, 5]));   // Should return false
}