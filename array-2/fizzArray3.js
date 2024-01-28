function fizzArray3(start, end) {
    const result = [];
  
    for (let i = start; i < end; i++) {
        result.push(i);
    }
  
    return result;


// Example usage:
console.log(fizzArray3(5, 10));   // [5, 6, 7, 8, 9]
console.log(fizzArray3(11, 18));  // [11, 12, 13, 14, 15, 16, 17]
console.log(fizzArray3(1, 3));    // [1, 2]
}