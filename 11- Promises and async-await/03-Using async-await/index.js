// ===========================================================================================================
                                        // USING ASYNC/AWAIT
// ===========================================================================================================

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.


const promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("this asyncFuntion promise is resolved after 1000 ms")
    },1000)
})
async function asyncFunction(){
    const message = await promise4
    console.log("promise msg :-", message)
}

asyncFunction()



// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

const promise5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("this asyncFunction2 promise is rejected after 1000 ms")
    },1000)
})

async function asyncFunction2(){
    try {
        const message = await promise5
        console.log("promise msg :-", message)
    } catch (error) {
        console.log("promise error :-", error)
    }
}

asyncFunction2()