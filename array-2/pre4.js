function pre4(nums) {
    let result = [];
    
    for (let num of nums) {
        if (num === 4) {
            break;
        }
        
        result.push(num);
    }
    
    return result;


// Example usage:
console.log(pre4([1, 2, 4, 1])); // [1, 2]
console.log(pre4([3, 1, 4]));    // [3, 1]
console.log(pre4([1, 4, 4]));    // [1]
}