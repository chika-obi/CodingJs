function biggerTwo(a, b) {
  // Calculate the sum of values in each array
  const sumA = a[0] + a[1];
  const sumB = b[0] + b[1];

  // Return the array with the larger sum or a in case of a tie
  return sumA >= sumB ? a : b;


// Test cases
console.log(biggerTwo([1, 2], [3, 4]));  // Should return [3, 4]
console.log(biggerTwo([3, 4], [1, 2]));  // Should return [3, 4]
console.log(biggerTwo([1, 1], [1, 2]));  // Should return [1, 2]
}