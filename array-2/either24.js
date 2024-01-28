function either24(nums) {
    let hasTwoNextToTwo = false;
    let hasFourNextToFour = false;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 2 && nums[i + 1] === 2) {
            hasTwoNextToTwo = true;
        }
        if (nums[i] === 4 && nums[i + 1] === 4) {
            hasFourNextToFour = true;
        }
    }

    return (hasTwoNextToTwo && !hasFourNextToFour) || (!hasTwoNextToTwo && hasFourNextToFour);


// Example usage:
console.log(either24([1, 2, 2])); // true
console.log(either24([4, 4, 1])); // true
console.log(either24([4, 4, 1, 2, 2])); // false
}