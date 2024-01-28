function only14(nums) {
  // Check if every element in the array is 1 or 4
  return nums.every(num => num === 1 || num === 4);
// Test cases
console.log(only14([1, 4, 1, 4]));  // Should return true
console.log(only14([1, 4, 2, 4]));  // Should return false
console.log(only14([1, 1]));        // Should return true
}