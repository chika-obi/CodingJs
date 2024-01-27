function twoAsOne(a, b, c) {
  return (a + b === c || b + c === a || c + a === b);


// Test cases
console.log(twoAsOne(1, 2, 3)); // Should return true
console.log(twoAsOne(3, 1, 2)); // Should return true
console.log(twoAsOne(3, 2, 2)); // Should return false
}