// Task 1 : Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

    const string = "I love JavaScript. If you do not love JavaScript what else can you love if not JavaScript";

    const regex =  /javascript/gi;

    console.log(string.match(regex))



// Task 2: Write a regular expression to match all digits in a string. Log the matches.

const string2 = "hii there i am naman khandelwal 12 hii how are you doing 45 lala lala lalaaa 4"

const regex2 = /\d/g

console.log(string2.match(regex2))