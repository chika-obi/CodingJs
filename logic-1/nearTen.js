function nearTen(num) {
  return num % 10 <= 2 || num % 10 >= 8;


// Test cases
console.log(nearTen(12)); // Should return true
console.log(nearTen(17)); // Should return false
console.log(nearTen(19)); // Should return true
}