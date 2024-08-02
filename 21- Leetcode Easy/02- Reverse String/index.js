// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// - Write a function that takes an integer and returns it with its digits reversed.
// - Handle edge cases like negative nurnbers and nun&rs ending in zero.
// - Log the reversed integers for a few test cases.


function reverseInteger(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    
    if (num < 0) {
        return reversed * -1;
    }
    
    return reversed;
}

// Test cases
console.log(reverseInteger(123));
console.log(reverseInteger(486));
console.log(reverseInteger(-123));
console.log(reverseInteger(120));

