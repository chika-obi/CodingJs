function frontPiece(nums) {
    // Use slice to get the first 2 elements of the array
    return nums.slice(0, 2);

// Example usage:
console.log(frontPiece([1, 2, 3]));   // [1, 2]
console.log(frontPiece([1, 2]));      // [1, 2]
console.log(frontPiece([1]));         // [1]
}