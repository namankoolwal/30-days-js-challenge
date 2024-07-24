// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

let promise = new Promise((resolve , reject)=>{
    let random = Math.floor(Math.random()*2)
        if(random === 0){
            resolve("this is a resolved promise")
        }
        else{
            reject("this is a rejected promise")
        }   
})

promise.then((message)=>{
    console.log(message)
})
.catch(error=>{
    console.log(error)
})



// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

   async function asyncFunction(){
    try {
       const message = await promise
        console.log(message)
    } 
    catch (error) {
        console.log(error)    
    } 
   }
   asyncFunction()