function no14(nums) {
  // Check if the array contains no 1's or no 4's
  return !nums.includes(1) || !nums.includes(4);


// Test cases
console.log(no14([1, 2, 3]));    // Should return true
console.log(no14([1, 2, 3, 4])); // Should return false
console.log(no14([2, 3, 4]));    // Should return true
}