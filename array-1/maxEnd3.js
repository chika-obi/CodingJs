function maxEnd3(nums) {
  const maxElement = Math.max(nums[0], nums[2]);
  return [maxElement, maxElement, maxElement];


// Test cases
console.log(maxEnd3([1, 2, 3]));      // Should return [3, 3, 3]
console.log(maxEnd3([11, 5, 9]));     // Should return [11, 11, 11]
console.log(maxEnd3([2, 11, 3]));     // Should return [3, 3, 3]
}