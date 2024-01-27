function makeBricks(small, big, goal) {
  // Calculate the maximum length achievable using only big bricks
  const maxBigLength = big * 5;

  // Calculate the remaining goal length after using big bricks
  const remainingGoal = goal - Math.min(goal, maxBigLength);

  // Check if the remaining goal can be achieved using small bricks
  return remainingGoal <= small;


// Test case
console.log(makeBricks(2, 1000000, 100003)); // Should return false
}