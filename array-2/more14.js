function more14(nums) {
  let count1 = 0;
  let count4 = 0;

  for (let num of nums) {
    if (num === 1) {
      count1++;
    } else if (num === 4) {
      count4++;
    }
  }

  return count1 > count4;
// Test cases
console.log(more14([1, 4, 1]));        // Should return true
console.log(more14([1, 4, 1, 4]));     // Should return false
console.log(more14([1, 1]));           // Should return true
}