function shiftLeft(nums) {
    if (nums.length <= 1) {
        return nums;  // No change needed for arrays of length 0 or 1
    }

    const firstElement = nums.shift();  // Remove the first element and store it
    nums.push(firstElement);  // Append the stored element to the end of the array

    return nums;


// Example usage:
console.log(shiftLeft([6, 2, 5, 3])); // [2, 5, 3, 6]
console.log(shiftLeft([1, 2]));        // [2, 1]
console.log(shiftLeft([1]));           // [1]
}