// Task 9: VWite a regular expression to validate a simple password (must include at least one letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

const pass1 = "naman@123"
const pass2 = "Naman@123"

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

console.log("testing valid and invalid passwords")
console.log(regex.test(pass1))
console.log(regex.test(pass2))




// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

const url1 = "https://www.google.com"
const url2 = "https://www.google"
const url3 = "http://.com"
const url4 = "https://google"
const url5 = "https://google.com"
const url6 = "http://example.com/path/to/resource"
const url7 = "www.google.com"

const regex2 = /^(https?:\/\/)?(www\.)?[\w\-]+\.[a-z]{2,}(\/[\w\-\.]*)*$/

console.log("testing valid and invalid urls")
console.log(`${regex2.test(url1)}   :- ${url1} `)
console.log(`${regex2.test(url2)}   :- ${url2} `)
console.log(`${regex2.test(url3)}  :- ${url3} `)
console.log(`${regex2.test(url4)}  :- ${url4} `)
console.log(`${regex2.test(url5)}   :- ${url5} `)
console.log(`${regex2.test(url6)}   :- ${url6} `)
console.log(`${regex2.test(url7)}   :- ${url7} `)



  