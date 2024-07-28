// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

     function factorial(n){
        if(n ===0){
            return 1;
        }
        else{
            return n * factorial(n-1)
        }
     }

     console.log("Task 1: Factorial of a number")
     console.log(factorial(1))
     console.log(factorial(2))
     console.log(factorial(3))
     console.log(factorial(4))
     console.log(factorial(5))
     console.log(factorial(6))

// Task 2: Write a recursive function to calculate the nth Fibonacci Log the result for a few test cases.

    function fibonacci(n){
        if(n === 0){
            return 0;
        }
        if(n === 1){
            return 1;
        }
        return fibonacci(n-1) + fibonacci(n-2);
    }

    console.log("Task 2: Fibonacci of a number")
    console.log(fibonacci(5))
    console.log(fibonacci(6))
    console.log(fibonacci(7))
    console.log(fibonacci(8))


// ===========================Working of fibonacci(3)===========================

//     fibonacci(3)
//    |
//    +--fibonacci(2)
//    |     |
//    |     +--fibonacci(1) => 1
//    |     +--fibonacci(0) => 0
//    |
//    +--fibonacci(1) => 1

// **********************************view the image(fibonacci recurssion.png) in the same folder************************************
