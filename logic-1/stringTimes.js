function stringTimes(str, n) {
  let result = '';

  for (let i = 0; i < n; i++) {
    result += str;
  }

  return result;


// Test cases
console.log(stringTimes('Hi', 2));  // Should return 'HiHi'
console.log(stringTimes('Hi', 3));  // Should return 'HiHiHi'
console.log(stringTimes('Hi', 1));  // Should return 'Hi'
}