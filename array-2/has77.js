function has77(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 7 && nums[i + 1] === 7) {
            return true;
        }

        if (i < nums.length - 2 && nums[i] === 7 && nums[i + 2] === 7) {
            return true;
        }
    }

    return false;


// Example usage:
console.log(has77([1, 7, 7]));         // true
console.log(has77([1, 7, 1, 7]));      // true
console.log(has77([1, 7, 1, 1, 7]));   // false
}