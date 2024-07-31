// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const string = "I Love JavaScript. If you do not love JavaScript what else can you love if not JavaScript";

const regex = /\b[A-Z]\w+/g;

console.log(string.match(regex));


// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const string2 = "hii there i am naman khandelwal 12 hii how are you doing 45 lala lala lalaaa 4"

const regex2 = /\d+/g

console.log(string2.match(regex2))