function caughtSpeeding(speed, isBirthday) {
  // Adjust the speed limit based on whether it's your birthday
  const speedLimit = isBirthday ? 65 : 60;

  // Check the speed and compute the result accordingly
  if (speed <= speedLimit) {
    return 0; // No ticket
  } else if (speed <= speedLimit + 20) {
    return 1; // Small ticket
  } else {
    return 2; // Big ticket
  }


// Test cases
console.log(caughtSpeeding(60, false)); // Should return 0
console.log(caughtSpeeding(65, false)); // Should return 1
console.log(caughtSpeeding(65, true));  // Should return 0
