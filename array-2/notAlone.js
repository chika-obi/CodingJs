function notAlone(nums, val) {
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] === val && nums[i - 1] !== val && nums[i + 1] !== val) {
            nums[i] = Math.max(nums[i - 1], nums[i + 1]);
        }
    }

    return nums;


// Example usage:
console.log(notAlone([1, 2, 3], 2));                     // [1, 3, 3]
console.log(notAlone([1, 2, 3, 2, 5, 2], 2));           // [1, 3, 3, 5, 5, 2]
console.log(notAlone([3, 4], 3));                       // [3, 4]
}