function middleWay(a, b) {
  return [a[1], b[1]];

// Test cases
console.log(middleWay([1, 2, 3], [4, 5, 6]));   // Should return [2, 5]
console.log(middleWay([7, 7, 7], [3, 8, 0]));   // Should return [7, 8]
console.log(middleWay([5, 2, 9], [1, 4, 5]));   // Should return [2, 4]
}