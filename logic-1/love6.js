function love6(a, b) {
  return (a === 6 || b === 6 || a + b === 6 || Math.abs(a - b) === 6);


// Test cases
console.log(love6(6, 4)); // Should return true
console.log(love6(4, 5)); // Should return false
console.log(love6(1, 5)); // Should return true
}