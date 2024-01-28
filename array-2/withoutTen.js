function withoutTen(nums) {
    let result = [];
    let countNonTen = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 10) {
            result[countNonTen] = nums[i];
            countNonTen++;
        }
    }

    // Fill the remaining positions with 0
    while (countNonTen < nums.length) {
        result[countNonTen] = 0;
        countNonTen++;
    }

    return result;

// Example usage:
console.log(withoutTen([1, 10, 10, 2]));  // [1, 2, 0, 0]
console.log(withoutTen([10, 2, 10]));      // [2, 0, 0]
console.log(withoutTen([1, 99, 10]));      // [1, 99, 0]
}