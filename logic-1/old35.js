function old35(n) {
  const isMultipleOf3 = n % 3 === 0;
  const isMultipleOf5 = n % 5 === 0;

  return (isMultipleOf3 || isMultipleOf5) && !(isMultipleOf3 && isMultipleOf5);


// Test cases
console.log(old35(3));  // Should return true
console.log(old35(10)); // Should return true
console.log(old35(15)); // Should return false
}