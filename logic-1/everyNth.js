function everyNth(str, N) {
  let result = '';
  
  for (let i = 0; i < str.length; i += N) {
    result += str[i];
  }

  return result;


// Test cases
console.log(everyNth('Miracle', 2));  // Should return 'Mrce'
console.log(everyNth('abcdefg', 2));  // Should return 'aceg'
console.log(everyNth('abcdefg', 3));  // Should return 'adg'
}