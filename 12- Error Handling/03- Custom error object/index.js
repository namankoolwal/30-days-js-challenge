// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name = "CustomErrors"
    }
}

try {
    throw new CustomError("This is a custom error")
}
catch (error) {
    console.log(error.message)
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

    function validation(input){
        if(input === ""){
            throw new CustomError("input is empty")
        }
        else{
            console.log(input)
        }
    }

    try{
        validation("")
    }
    catch(error){
        console.log(error.message)
    }