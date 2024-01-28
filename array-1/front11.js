function front11(a, b) {
    // Check if both arrays are non-empty
    if (a.length > 0 && b.length > 0) {
        // Return a new array with the first element of each array
        return [a[0], b[0]];
    } else if (a.length > 0) {
        // Return a new array with the first element of array 'a'
        return [a[0]];
    } else if (b.length > 0) {
        // Return a new array with the first element of array 'b'
        return [b[0]];
    } else {
        // If both arrays are empty, return an empty array
        return [];
    }


// Example usage:
console.log(front11([1, 2, 3], [7, 9, 8]));  // [1, 7]
console.log(front11([1], [2]));             // [1, 2]
console.log(front11([1, 7], []));            // [1]
}