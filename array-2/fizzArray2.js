function fizzArray2(n) {
  // Create a new array of length n and fill it with strings "0", "1", ..., "n-1"
  return Array.from({ length: n }, (_, index) => String(index));
// Test cases
console.log(fizzArray2(4));  // Should return ["0", "1", "2", "3"]
console.log(fizzArray2(10)); // Should return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
console.log(fizzArray2(2));  // Should return ["0", "1"]
}