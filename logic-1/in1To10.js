function in1To10(n, outsideMode) {
  if (outsideMode) {
    return (n <= 1 || n >= 10);
  } else {
    return (n >= 1 && n <= 10);
  }


// Test cases
console.log(in1To10(5, false)); // Should return true
console.log(in1To10(11, false)); // Should return false
console.log(in1To10(11, true)); // Should return true
