// Task 5: Solve the 'Valid Parentheses" problem on LeetCode.
// o VWite a function that takes a string containing just the characters 'C, 'Y, T, and and determines if the input string is valid.
// o A string is valid if open brackets are closed in the correct order.
// o Log the result for a few test cases.



function validParentheses(str){
    let stack = []
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for(let i = 0; i<str.length; i++){
        if(str[i] === '(' || str[i] === '[' || str[i] === '{'){
            stack.push(str[i])
        }else{
            let last = stack.pop()
            if(str[i] !== map[last]){
                return false
            }
        }
    }
    if(stack.length !== 0){
        return false
    }
    return true
}

// Test cases
console.log(validParentheses('()')) // Output: true
console.log(validParentheses('()[]{}')) // Output: true
console.log(validParentheses('(]')) // Output: false
console.log(validParentheses('([)]')) // Output: false
console.log(validParentheses('{[]}')) // Output: true
