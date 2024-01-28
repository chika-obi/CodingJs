function has12(nums) {
    let found1 = false;

    for (let num of nums) {
        if (num === 1) {
            found1 = true;
        }

        if (found1 && num === 2) {
            return true;
        }
    }

    return false;


// Example usage:
console.log(has12([1, 3, 2]));           // true
console.log(has12([3, 1, 2]));           // true
console.log(has12([3, 1, 4, 5, 2]));     // true
}