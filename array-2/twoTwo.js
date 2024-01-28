function twoTwo(nums) {
  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Check if the current element is 2
    if (nums[i] === 2) {
      // Check if the previous and next elements are not 2
      if (i > 0 && nums[i - 1] !== 2 && (i === nums.length - 1 || nums[i + 1] !== 2)) {
        return false;
      }
    }
  }
  return true;


// Test cases
console.log(twoTwo([4, 2, 2, 3]));   // Should return true
console.log(twoTwo([2, 2, 4]));      // Should return true
console.log(twoTwo([2, 2, 4, 2]));   // Should return false
 
}