// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

const string = `
JavaScript love JavaScript. If you do not love 
JavaScript what else can you love if not JavaScript
`;


const regex = /^JavaScript/gm;

console.log(string.match(regex));


// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

const string2 = `
JavaScript love JavaScript. If you do not love random
JavaScript what else random can you love if not JavaScript 
`;

const regex2 = /random$/gm;

console.log(string2.match(regex2));