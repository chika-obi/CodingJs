function haveThree(nums) {
  let count = 0;

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Check if the current element is 3
    if (nums[i] === 3) {
      // Check if the previous and next elements are not 3
      if ((i === 0 || nums[i - 1] !== 3) && (i === nums.length - 1 || nums[i + 1] !== 3)) {
        count++;
      } else {
        return false;
      }
    }
  }

  // Check if the count is exactly 3
  return count === 3;


// Test cases
console.log(haveThree([3, 1, 3, 1, 3]));   // Should return true
console.log(haveThree([3, 1, 3, 3]));      // Should return false
console.log(haveThree([3, 4, 3, 3, 4]));   // Should return false
}