function makeEnds(nums) {
  return [nums[0], nums[nums.length - 1]];
// Test cases
console.log(makeEnds([1, 2, 3]));        // Should return [1, 3]
console.log(makeEnds([1, 2, 3, 4]));     // Should return [1, 4]
console.log(makeEnds([7, 4, 6, 2]));     // Should return [7, 2]
}