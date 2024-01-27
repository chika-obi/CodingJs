function blueTicket(a, b, c) {
  const abSum = a + b;
  const bcSum = b + c;
  const acSum = a + c;

  if (abSum === 10 || bcSum === 10 || acSum === 10) {
    return 10;
  } else if (abSum === bcSum + 10 || abSum === acSum + 10) {
    return 5;
  } else {
    return 0;
  }


// Test cases
console.log(blueTicket(9, 1, 0)); // Should return 10
console.log(blueTicket(9, 2, 0)); // Should return 0
console.log(blueTicket(6, 1, 4)); // Should return 10
}