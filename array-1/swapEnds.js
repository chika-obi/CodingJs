function swapEnds(nums) {
    if (nums.length >= 1) {
        // Swap the first and last elements
        const temp = nums[0];
        nums[0] = nums[nums.length - 1];
        nums[nums.length - 1] = temp;
    }
    return nums;


// Example usage:
console.log(swapEnds([1, 2, 3, 4]));      // [4, 2, 3, 1]
console.log(swapEnds([1, 2, 3]));         // [3, 2, 1]
console.log(swapEnds([8, 6, 7, 9, 5]));   // [5, 6, 7, 9, 8]
}