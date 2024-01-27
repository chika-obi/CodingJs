function lastDigit(a, b) {
  return a % 10 === b % 10;


// Test cases
console.log(lastDigit(7, 17));  // Should return true
console.log(lastDigit(6, 17));  // Should return false
console.log(lastDigit(3, 113)); // Should return true
}