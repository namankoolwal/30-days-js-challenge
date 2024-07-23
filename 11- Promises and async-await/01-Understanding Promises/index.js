// ===========================================================================================================
                                        // UNDERSTANDING PROMISES
// ===========================================================================================================


// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("this promise is resolved after 2000 ms")
    },2000)
})

promise.then(message=>{
    console.log(message)
})



// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch() .

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("this promise is rejected after 2000 ms")
    },2000)
})

promise2.catch((error)=>{
    console.log(error)
})
