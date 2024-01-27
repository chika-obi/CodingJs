function maxMod5(a, b) {
  if (a === b) {
    return 0;
  } else if (a % 5 === b % 5) {
    return Math.min(a, b);
  } else {
    return Math.max(a, b);
  }


// Test cases
console.log(maxMod5(2, 3)); // Should return 3
console.log(maxMod5(6, 2)); // Should return 6
console.log(maxMod5(3, 2)); // Should return 3
}