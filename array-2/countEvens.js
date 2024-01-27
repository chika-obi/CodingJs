function countEvens(nums) {
  let count = 0;
  for (let num of nums) {
    if (num % 2 === 0) {
      count++;
    }
  }
  return count;


// Test cases
console.log(countEvens([2, 1, 2, 3, 4])); // Should return 3
console.log(countEvens([2, 2, 0]));         // Should return 3
console.log(countEvens([1, 3, 5]));         // Should return 0
}