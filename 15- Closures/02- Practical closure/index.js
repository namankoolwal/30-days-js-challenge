// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.


const uniqueIdGenerator = () => {
    let uniqueId = 101

    const generateId = () => {
        return uniqueId++
    }

    return generateId
}

const id = uniqueIdGenerator()
console.log(id())
console.log(id())
console.log(id())



// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

const greetUser = (name) => {
    const greet = () => {
        console.log(`Hello ${name}, How are you doing today ?`)
    }

    return greet
}

const naman = greetUser('Naman')
naman()