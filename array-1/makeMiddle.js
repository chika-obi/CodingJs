function makeMiddle(nums) {
    const middleIndex = nums.length / 2 - 1;
    return [nums[middleIndex], nums[middleIndex + 1]];

// Example usage:
console.log(makeMiddle([1, 2, 3, 4]));                // [2, 3]
console.log(makeMiddle([7, 1, 2, 3, 4, 9]));          // [2, 3]
console.log(makeMiddle([1, 2]));                      // [1, 2]
}