function specialEleven(n) {
  return (n % 11 === 0 || (n - 1) % 11 === 0);


// Test cases
console.log(specialEleven(22)); // Should return true
console.log(specialEleven(23)); // Should return true
console.log(specialEleven(24)); // Should return false
}