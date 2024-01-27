function sortaSum(a, b) {
  const sum = a + b;

  // Check if the sum is in the forbidden range (10 to 19 inclusive)
  if (sum >= 10 && sum <= 19) {
    return 20;
  } else {
    return sum;
  }


// Test cases
console.log(sortaSum(3, 4));   // Should return 7
console.log(sortaSum(9, 4));   // Should return 20
console.log(sortaSum(10, 11)); // Should return 21
