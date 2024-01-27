function redTicket(a, b, c) {
  if (a === b && b === c) {
    if (a === 2) {
      return 10;
    } else {
      return 5;
    }
  } else if (a !== b && a !== c) {
    return 1;
  } else {
    return 0;
  }


// Test cases
console.log(redTicket(2, 2, 2)); // Should return 10
console.log(redTicket(2, 2, 1)); // Should return 0
console.log(redTicket(0, 0, 0)); // Should return 5
}