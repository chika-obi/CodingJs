function inOrder(a, b, c, bOk) {
  if (bOk) {
    return c > b;
  } else {
    return b > a && c > b;
  }


// Test cases
console.log(inOrder(1, 2, 4, false)); // Should return true
console.log(inOrder(1, 2, 1, false)); // Should return false
console.log(inOrder(1, 1, 2, true));  // Should return true
