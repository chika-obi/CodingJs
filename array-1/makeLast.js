function makeLast(nums) {
  const newArray = Array(nums.length * 2).fill(0);
  newArray[newArray.length - 1] = nums[nums.length - 1];
  return newArray;
// Test cases
console.log(makeLast([4, 5, 6]));  // Should return [0, 0, 0, 0, 0, 6]
console.log(makeLast([1, 2]));      // Should return [0, 0, 0, 2]
console.log(makeLast([3]));         // Should return [0, 3]
}