// Task 5: Write a regular expression to capture the area code, central office code, and line from a US phone number format (e.g., (123) 456-7890). Log the captures.

const string = "(123) 456-7890";

const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/g;

const match = string.match(regex);
console.log(match);




// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

const string2 = "my test email id is namankhandelwal@test.com"

const regex2 = /(\w+)\@(\w+.\w+)/

const match2 = string2.match(regex2)

console.log(match2)

console.log("username : ",  match2[1])
console.log("domain : " , match2[2])