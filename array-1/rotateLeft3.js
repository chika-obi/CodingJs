function rotateLeft3(nums) {
  return [nums[1], nums[2], nums[0]];


// Test cases
console.log(rotateLeft3([1, 2, 3]));     // Should return [2, 3, 1]
console.log(rotateLeft3([5, 11, 9]));    // Should return [11, 9, 5]
console.log(rotateLeft3([7, 0, 0]));     // Should return [0, 0, 7]
}