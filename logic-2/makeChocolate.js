function makeChocolate(small, big, goal) {
  const bigBarsNeeded = Math.min(Math.floor(goal / 5), big);
  const remainingGoal = goal - bigBarsNeeded * 5;

  if (remainingGoal <= small) {
    return remainingGoal;
  }

  return -1;

// Test cases
console.log(makeChocolate(4, 1, 9));  // Should return 4
console.log(makeChocolate(4, 1, 10)); // Should return -1
console.log(makeChocolate(4, 1, 7));  // Should return 2
}