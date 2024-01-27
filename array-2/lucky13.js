function lucky13(nums) {
  for (let num of nums) {
    if (num === 1 || num === 3) {
      return false;
    }
  }
  return true;

// Test cases
console.log(lucky13([0, 2, 4]));   // Should return true
console.log(lucky13([1, 2, 3]));   // Should return false
console.log(lucky13([1, 2, 4]));   // Should return false
}