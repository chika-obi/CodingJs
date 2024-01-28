function unlucky1(nums) {
    const len = nums.length;

    // Check if an unlucky 1 is present in the first 2 or last 2 positions
    if (len >= 2 && (nums[0] === 1 && nums[1] === 3)) {
        return true;
    }

    if (len >= 3 && (nums[1] === 1 && nums[2] === 3)) {
        return true;
    }

    if (len >= 4 && (nums[len - 3] === 1 && nums[len - 2] === 3)) {
        return true;
    }

    return false;

// Example usage:
console.log(unlucky1([1, 3, 4, 5]));       // true
console.log(unlucky1([2, 1, 3, 4, 5]));    // true
console.log(unlucky1([1, 1, 1]));          // false
}