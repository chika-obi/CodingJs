function less20(n) {
  return (n % 20 === 18 || n % 20 === 19);


// Test cases
console.log(less20(18)); // Should return true
console.log(less20(19)); // Should return true
console.log(less20(20)); // Should return false
}