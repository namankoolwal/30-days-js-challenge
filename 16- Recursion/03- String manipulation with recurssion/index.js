// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str){
    if(str.length <1){
        return ""
    }
    return str[str.length-1] + reverseString(str.slice(0,str.length-1))
}
    
console.log("Task 5: Reverse a string")
console.log(reverseString("hello"))
console.log(reverseString("world"))
console.log(reverseString("30-days-javascript-challenge"))







// Task 6: Wtite a function to check if a string is a palindrorne. Log the result for a few test cases.

function isPalindrome(str){
    if(str.length === 0){
        return true
    }
    if(str[0] !== str[str.length-1]){
        return false
    }
    return isPalindrome(str.slice(1,str.length-1))
}   

console.log("Task 6: Check if a string is a palindrome")
console.log(isPalindrome("naman"))
console.log(isPalindrome("hello"))
console.log(isPalindrome("madam"))

