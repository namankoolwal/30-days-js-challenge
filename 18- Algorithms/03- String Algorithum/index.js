// Task 6: Write a function to count the xcurrences of each character in a string. Log the character counts.

function countCharacters(str) {
    let obj = {};
    for(let i =0 ; i<str.length ; i++){
        if(obj[str[i]]){
            obj[str[i]] ++
        }
        else{
            obj[str[i]] = 1
        }
    }
    return obj
}

let str ="namanaman";
console.log(countCharacters(str));

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestSubstring(str) {
    let obj = {};
    let start = 0;
    let max = 0;
    for(let i =0 ; i<str.length ; i++){
        if(obj[str[i]] >= start){
            start = obj[str[i]] + 1;
        }
        obj[str[i]] = i;
        max = Math.max(max , i-start+1);
    }
    console.log(obj);
    return max;
}

let str2 = "abceddfgh";
console.log(longestSubstring(str2));
