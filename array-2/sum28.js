function sum28(nums) {
  let sumOfTwos = 0;
  for (let num of nums) {
    if (num === 2) {
      sumOfTwos += num;
    }
  }
  return sumOfTwos === 8;

// Test cases
console.log(sum28([2, 3, 2, 2, 4, 2]));        // Should return true
console.log(sum28([2, 3, 2, 2, 4, 2, 2]));     // Should return false
console.log(sum28([1, 2, 3, 4]));              // Should return false
}