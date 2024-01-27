function sumLimit(a, b) {
  const sum = a + b;
  const numDigitsA = String(a).length;
  const numDigitsSum = String(sum).length;

  return numDigitsSum === numDigitsA ? sum : a;


// Test cases
console.log(sumLimit(2, 3)); // Should return 5
console.log(sumLimit(8, 3)); // Should return 8
console.log(sumLimit(8, 1)); // Should return 9
}