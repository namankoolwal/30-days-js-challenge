// Task 3: Solve the "Palindrorne Number" problem on LeetCode.
// o Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// o Log the result for a few test cases, including edge cases like negative Number.


const palindromeNumber =(num)=>{
    let reverse = 0
    let num2 = num
    if(num<0){
        return false
    }

    while(num2){
        let temp = num2%10
        reverse = reverse*10 + temp
        num2 = Math.floor(num2/10)
    }
    return reverse === num

}

console.log(palindromeNumber(12521)) //true
console.log(palindromeNumber(32125)) //false
console.log(palindromeNumber(52825)) //true
console.log(palindromeNumber(47965)) //false