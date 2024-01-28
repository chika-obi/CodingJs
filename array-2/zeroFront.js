function zeroFront(nums) {
    let countZeros = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            let temp = nums[i];
            nums[i] = nums[countZeros];
            nums[countZeros] = temp;
            countZeros++;
        }
    }
    return nums;

// Example usage:
console.log(zeroFront([1, 0, 0, 1]));         // [0, 0, 1, 1]
console.log(zeroFront([0, 1, 1, 0, 1]));      // [0, 0, 1, 1, 1]
console.log(zeroFront([1, 0]));               // [0, 1]

}