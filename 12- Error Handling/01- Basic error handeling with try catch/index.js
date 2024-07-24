// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

    function throwError(){
        try{
            throw new Error("this is an intentional error")
        }
        catch(error){
            console.log(error.message)
        }
    }
    throwError()

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

    function divide(a,b){
        try{
            if(b === 0){
                throw new Error("Denominatoe can't be zero")
            }
            else{
                return a/b
            }
        }
        catch(error){
           return error.message
        }
    }

    console.log(divide(10,5))