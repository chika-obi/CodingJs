function no23(nums) {
  return !nums.includes(2) && !nums.includes(3);
// Test cases
console.log(no23([4, 5]));   // Should return true
console.log(no23([4, 2]));   // Should return false
console.log(no23([3, 5]));   // Should return false
}