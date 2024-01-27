function withoutDoubles(die1, die2, noDoubles) {
  if (noDoubles && die1 === die2) {
    // Increment one die to the next value, wrapping around to 1 if its value was 6
    die1 = (die1 % 6) + 1;
  }

  return die1 + die2;


// Test cases
console.log(withoutDoubles(2, 3, true));  // Should return 5
console.log(withoutDoubles(3, 3, true));  // Should return 7
console.log(withoutDoubles(3, 3, false)); // Should return 6
}