
  function cigarParty(cigars, isWeekend) {
  // Check if it's the weekend
  if (isWeekend) {
    // If it's the weekend, the party is successful regardless of the number of cigars
    return cigars >= 40;
  } else {
    // If it's not the weekend, the party is successful if the number of cigars is between 40 and 60 (inclusive)
    return cigars >= 40 && cigars <= 60;
  }


// Test cases
console.log(cigarParty(30, false)); // Should return false
console.log(cigarParty(50, false)); // Should return true
console.log(cigarParty(70, true));  // Should return true
}


