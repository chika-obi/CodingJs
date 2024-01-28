function maxTriple(nums) {
    const first = nums[0];
    const last = nums[nums.length - 1];
    const middleIndex = Math.floor(nums.length / 2);
    const middle = nums[middleIndex];

    // Return the largest of the first, last, and middle values
    return Math.max(first, last, middle);


// Example usage:
console.log(maxTriple([1, 2, 3]));        // 3
console.log(maxTriple([1, 5, 3]));        // 5
console.log(maxTriple([5, 2, 3]));        // 5
}