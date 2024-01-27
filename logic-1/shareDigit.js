function shareDigit(a, b) {
  const aDigit1 = Math.floor(a / 10);
  const aDigit2 = a % 10;
  
  const bDigit1 = Math.floor(b / 10);
  const bDigit2 = b % 10;

  return aDigit1 === bDigit1 || aDigit1 === bDigit2 || aDigit2 === bDigit1 || aDigit2 === bDigit2;


// Test cases
console.log(shareDigit(12, 23)); // Should return true
console.log(shareDigit(12, 43)); // Should return false
console.log(shareDigit(12, 44)); // Should return false
}