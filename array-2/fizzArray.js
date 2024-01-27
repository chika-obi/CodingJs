function fizzArray(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;


// Test cases
console.log(fizzArray(4));  // Should return [0, 1, 2, 3]
console.log(fizzArray(1));  // Should return [0]
console.log(fizzArray(10)); // Should return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}