function closeFar(a, b, c) {
  const abClose = Math.abs(a - b) <= 1;
  const acClose = Math.abs(a - c) <= 1;
  const bcClose = Math.abs(b - c) <= 1;

  const abFar = Math.abs(a - b) >= 2;
  const acFar = Math.abs(a - c) >= 2;
  const bcFar = Math.abs(b - c) >= 2;

  return (abClose && acFar && bcFar) || (acClose && abFar && bcFar);


// Test cases
console.log(closeFar(1, 2, 10)); // Should return true
console.log(closeFar(1, 2, 3));  // Should return false
console.log(closeFar(4, 1, 3));  // Should return true
}