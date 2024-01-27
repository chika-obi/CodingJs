function noTeenSum(a, b, c) {
  return fixTeen(a) + fixTeen(b) + fixTeen(c);
}

function fixTeen(n) {
  if ((n >= 13 && n <= 14) || (n >= 17 && n <= 19)) {
    return 0;
  }
  return n;


// Test cases
console.log(noTeenSum(1, 2, 3));    // Should return 6
console.log(noTeenSum(2, 13, 1));   // Should return 3
console.log(noTeenSum(2, 1, 14));   // Should return 3
}