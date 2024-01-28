function modThree(nums) {
    for (let i = 0; i <= nums.length - 3; i++) {
        if ((nums[i] % 2 === 0 && nums[i + 1] % 2 === 0 && nums[i + 2] % 2 === 0) ||
            (nums[i] % 2 !== 0 && nums[i + 1] % 2 !== 0 && nums[i + 2] % 2 !== 0)) {
            return true;
        }
    }
    return false;


// Example usage:
console.log(modThree([2, 1, 3, 5])); // true
console.log(modThree([2, 1, 2, 5])); // false
console.log(modThree([2, 4, 2, 5])); // true
}