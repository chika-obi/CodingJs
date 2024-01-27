function fizzString(str) {
  const startsWithF = str.startsWith('f');
  const endsWithB = str.endsWith('b');

  if (startsWithF && endsWithB) {
    return 'FizzBuzz';
  } else if (startsWithF) {
    return 'Fizz';
  } else if (endsWithB) {
    return 'Buzz';
  } else {
    return str;
  }


// Test cases
console.log(fizzString('fig')); // Should return Fizz
console.log(fizzString('dib')); // Should return Buzz
console.log(fizzString('fib')); // Should return FizzBuzz
