function findLowestIndex(nums) {
  let minIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;


// Test cases
console.log(findLowestIndex([99, 98, 97, 96, 95])); // Should return 4
console.log(findLowestIndex([2, 2, 0]));             // Should return 2
console.log(findLowestIndex([1, 3, 5]));             // Should return 0
}