function start1(a, b) {
  // Check if the first element of each array is 1
  const isFirstElement1InA = a.length > 0 && a[0] === 1;
  const isFirstElement1InB = b.length > 0 && b[0] === 1;

  // Count how many arrays have 1 as their first element
  let count = 0;
  if (isFirstElement1InA) {
    count++;
  }
  if (isFirstElement1InB) {
    count++;
  }

  return count;

// Test cases
console.log(start1([1, 2, 3], [1, 3]));  // Should return 2
console.log(start1([7, 2, 3], [1]));      // Should return 1
console.log(start1([1, 2], []));           // Should return 1
}