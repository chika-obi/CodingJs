function roundSum(a, b, c) {
  return round10(a) + round10(b) + round10(c);
}

function round10(num) {
  // Calculate the remainder when dividing by 10
  let remainder = num % 10;

  // Round up or down based on the remainder
  if (remainder >= 5) {
    return num + (10 - remainder);
  } else {
    return num - remainder;
  }


// Test cases
console.log(roundSum(16, 17, 18)); // Should return 60
console.log(roundSum(12, 13, 14)); // Should return 30
console.log(roundSum(6, 4, 4));    // Should return 10
}