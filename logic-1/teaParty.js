function teaParty(tea, candy) {
  if (tea < 5 || candy < 5) {
    return 0; // Bad party
  } else if (tea >= 2 * candy || candy >= 2 * tea) {
    return 2; // Great party
  } else {
    return 1; // Good party
  }


// Test cases
console.log(teaParty(6, 8));  // Should return 1
console.log(teaParty(3, 8));  // Should return 0
console.log(teaParty(20, 6)); // Should return 2
