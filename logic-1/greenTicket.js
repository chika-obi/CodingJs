function greenTicket(a, b, c) {
  if (a === b && b === c) {
    return 20;
  } else if (a === b || b === c || c === a) {
    return 10;
  } else {
    return 0;
  }


// Test cases
console.log(greenTicket(1, 2, 3)); // Should return 0
console.log(greenTicket(2, 2, 2)); // Should return 20
console.log(greenTicket(1, 1, 2)); // Should return 10
}