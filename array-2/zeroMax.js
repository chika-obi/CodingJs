function zeroMax(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 0) {
            let maxOdd = 0;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] % 2 === 1 && nums[j] > maxOdd) {
                    maxOdd = nums[j];
                }
            }
            if (maxOdd > 0) {
                nums[i] = maxOdd;
            }
        }
    }
    return nums;


// Test cases
console.log(zeroMax([0, 5, 0, 3])); // Output: [5, 5, 3, 3]
console.log(zeroMax([0, 4, 0, 3])); // Output: [3, 4, 3, 3]
console.log(zeroMax([0, 1, 0]));    // Output: [1, 1, 0]
}