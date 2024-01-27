function squirrelPlay(temperature, isSummer) {
  // Check if it's summer and adjust the upper limit accordingly
  if (isSummer) {
    return temperature >= 60 && temperature <= 100;
  } else {
    return temperature >= 60 && temperature <= 90;
  }


// Test cases
console.log(squirrelPlay(70, false)); // Should return true
console.log(squirrelPlay(95, false)); // Should return false
console.log(squirrelPlay(95, true));  // Should return true
