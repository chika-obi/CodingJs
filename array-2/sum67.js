function sum67(nums) {
  let sum = 0;
  let inRange = false;

  for (let num of nums) {
    if (num === 6) {
      inRange = true;
      continue;
    }

    if (inRange && num === 7) {
      inRange = false;
      continue;
    }

    if (!inRange) {
      sum += num;
    }
  }

  return sum;


// Test cases
console.log(sum67([1, 2, 2]));                  // Should return 5
console.log(sum67([1, 2, 2, 6, 99, 99, 7]));    // Should return 5
console.log(sum67([1, 1, 6, 7, 2]));            // Should return 4
}