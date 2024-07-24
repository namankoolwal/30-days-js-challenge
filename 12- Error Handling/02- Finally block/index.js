// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

    function finallyBlock(){
        try{
            throw new Error("this is an intentional error")
        }
        catch(error){
            console.log(error.message)
        }
        finally{
            console.log("This block will always run")
        }
    }
    finallyBlock()