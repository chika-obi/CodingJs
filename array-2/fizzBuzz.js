function fizzBuzz(start, end) {
  let result = [];

  for (let i = start; i < end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(String(i));
    }
  }

  return result;


// Test cases
console.log(fizzBuzz(1, 6));   // Should return [1, 2, 'Fizz', 4, 'Buzz']
console.log(fizzBuzz(1, 8));   // Should return [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7]
console.log(fizzBuzz(1, 11));  // Should return [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']
}