function reverse3(nums) {
  return [nums[2], nums[1], nums[0]];


// Test cases
console.log(reverse3([1, 2, 3]));     // Should return [3, 2, 1]
console.log(reverse3([5, 11, 9]));    // Should return [9, 11, 5]
console.log(reverse3([7, 0, 0]));     // Should return [0, 0, 7]
}