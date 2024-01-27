function endUp(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    const prefix = str.slice(0, -3);
    const suffix = str.slice(-3).toUpperCase();
    return prefix + suffix;
  }


// Test cases
console.log(endUp('Hello'));    // Should return 'HeLLO'
console.log(endUp('hi there')); // Should return 'hi thERE'
console.log(endUp('hi'));        // Should return 'HI'
}