function luckySum(a, b, c) {
  if (a === 13) {
    return 0;
  } else if (b === 13) {
    return a;
  } else if (c === 13) {
    return a + b;
  } else {
    return a + b + c;
  }


// Test cases
console.log(luckySum(1, 2, 3)); // Should return 6
console.log(luckySum(1, 2, 13)); // Should return 3
console.log(luckySum(1, 13, 3)); // Should return 1
}