function centeredAverage(nums) {
  // Find the minimum and maximum values in the array
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  // Calculate the sum of the array excluding the min and max
  let sum = nums.reduce((acc, num) => acc + num, 0) - min - max;

  // Calculate the centered average using integer division
  return Math.floor(sum / (nums.length - 2));

// Test cases
console.log(centeredAverage([1, 2, 3, 4, 100]));           // Should return 3
console.log(centeredAverage([1, 1, 5, 5, 10, 8, 7]));      // Should return 5
console.log(centeredAverage([-10, -4, -2, -4, -2, 0]));    // Should return -3
}