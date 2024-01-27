function evenlySpaced(a, b, c) {
  // Sort the values
  const sorted = [a, b, c].sort((x, y) => x - y);

  // Check if the differences are equal
  return sorted[1] - sorted[0] === sorted[2] - sorted[1];


// Test cases
console.log(evenlySpaced(2, 4, 6)); // Should return true
console.log(evenlySpaced(4, 6, 2)); // Should return true
console.log(evenlySpaced(4, 6, 3)); // Should return false
}