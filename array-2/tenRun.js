function tenRun(nums) {
    let result = [];
    let currentMultipleOf10 = null;

    for (let num of nums) {
        if (num % 10 === 0) {
            currentMultipleOf10 = num;
        }

        result.push(currentMultipleOf10 !== null ? currentMultipleOf10 : num);
    }

    return result;


// Example usage:
console.log(tenRun([2, 10, 3, 4, 20, 5])); // [2, 10, 10, 10, 20, 20]
console.log(tenRun([10, 1, 20, 2]));       // [10, 10, 20, 20]
console.log(tenRun([10, 1, 9, 20]));        // [10, 10, 10, 20]
}