function teenSum(a, b) {
  if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) {
    return 19;
  } else {
    return a + b;
  }


// Test cases
console.log(teenSum(3, 4));   // Should return 7
console.log(teenSum(10, 13)); // Should return 19
console.log(teenSum(13, 2));  // Should return 19
