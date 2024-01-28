function midThree(nums) {
    const middleIndex = Math.floor(nums.length / 2);
    // Return a new array containing the elements from the middle
    return [nums[middleIndex - 1], nums[middleIndex], nums[middleIndex + 1]];


// Example usage:
console.log(midThree([1, 2, 3, 4, 5]));              // [2, 3, 4]
console.log(midThree([8, 6, 7, 5, 3, 0, 9]));       // [7, 5, 3]
console.log(midThree([1, 2, 3]));                   // [1, 2, 3]
}