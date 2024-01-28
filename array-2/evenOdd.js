function evenOdd(nums) {
    let result = [];
    
    // Add even numbers to the result array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            result.push(nums[i]);
        }
    }
    
    // Add odd numbers to the result array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            result.push(nums[i]);
        }
    }
    
    return result;


// Test cases
console.log(evenOdd([1, 0, 1, 0, 0, 1, 1])); // Output: [0, 0, 0, 1, 1, 1, 1]
console.log(evenOdd([3, 3, 2]));             // Output: [2, 3, 3]
console.log(evenOdd([2, 2, 2]));             // Output: [2, 2, 2]
}