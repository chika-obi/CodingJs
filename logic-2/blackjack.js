function blackjack(a, b) {
  if (a > 21 && b > 21) {
    return 0;
  } else if (a > 21) {
    return b;
  } else if (b > 21) {
    return a;
  }

  // Both values are 21 or less
  return Math.max(a, b);


// Test cases
console.log(blackjack(19, 21)); // Should return 21
console.log(blackjack(21, 19)); // Should return 21
console.log(blackjack(19, 22)); // Should return 19
}