function dateFashion(you, date) {
  // Check if either of you has style of 2 or less
  if (you <= 2 || date <= 2) {
    return 0; // Result is 0 (no)
  } else if (you >= 8 || date >= 8) {
    return 2; // Result is 2 (yes) if either of you is very stylish (8 or more)
  } else {
    return 1; // Otherwise, the result is 1 (maybe)
  }


// Test cases
console.log(dateFashion(5, 10)); // Should return 2
console.log(dateFashion(5, 2));  // Should return 0
console.log(dateFashion(5, 5));  // Should return 1
