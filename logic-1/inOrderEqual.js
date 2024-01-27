function inOrderEqual(a, b, c, equalOk) {
  if (equalOk) {
    return a <= b && b <= c;
  } else {
    return a < b && b < c;
  }


// Test cases
console.log(inOrderEqual(2, 5, 11, false)); // Should return true
console.log(inOrderEqual(5, 7, 6, false));  // Should return false
console.log(inOrderEqual(5, 5, 7, true));   // Should return true
}