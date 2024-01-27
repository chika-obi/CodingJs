function firstLast6(nums) {
  return nums[0] === 6 || nums[nums.length - 1] === 6;


// Test cases
console.log(firstLast6([1, 2, 6]));        // Should return true
console.log(firstLast6([6, 1, 2, 3]));     // Should return true
console.log(firstLast6([13, 6, 1, 2, 3])); // Should return false
}