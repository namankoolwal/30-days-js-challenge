// ===========================================================================================================
                                        // CHAINING PROMISES
// ===========================================================================================================

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Data fetched from server")
    },2000)
})

promise3.then((message)=>{
    console.log(message)
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data processed")
        },2000)
    })
}).then((message2)=>{
    console.log(message2)
})