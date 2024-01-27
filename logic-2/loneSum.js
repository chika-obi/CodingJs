function loneSum(a, b, c) {
  if (a === b && b === c) {
    return 0;
  } else if (a === b) {
    return c;
  } else if (b === c) {
    return a;
  } else if (a === c) {
    return b;
  } else {
    return a + b + c;
  }


// Test cases
console.log(loneSum(1, 2, 3)); // Should return 6
console.log(loneSum(3, 2, 3)); // Should return 2
console.log(loneSum(3, 3, 3)); // Should return 0
}