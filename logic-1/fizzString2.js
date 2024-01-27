function fizzString2(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz!';
  } else if (n % 3 === 0) {
    return 'Fizz!';
  } else if (n % 5 === 0) {
    return 'Buzz!';
  } else {
    return n + '!';
  }


// Test cases
console.log(fizzString2(1)); // Should return '1!'
console.log(fizzString2(2)); // Should return '2!'
console.log(fizzString2(3)); // Should return 'Fizz!'
