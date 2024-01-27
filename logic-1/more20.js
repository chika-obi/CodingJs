function more20(n) {
  return (n % 20 === 1 || n % 20 === 2);


// Test cases
console.log(more20(20)); // Should return false
console.log(more20(21)); // Should return true
console.log(more20(22)); // Should return true
}