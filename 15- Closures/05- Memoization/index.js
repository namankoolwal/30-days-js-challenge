// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.


const memoize = (fn) => {
    const cache = {}

    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache')
            return cache[n]
        } else {
            console.log('Calculating result')
            const result = fn(n)
            cache[n] = result
            return result
        }
    }
}



// Task 8: Create a memoized version of a function that calculates the factorial of a number.


const factorial = (n) => {
    if (n === 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

const memoizedFactorial = memoize(factorial)

console.log(memoizedFactorial(5))
console.log(memoizedFactorial(5))
console.log(memoizedFactorial(4))





// ==============================================================================================

// ***************************** Summary *****************************************

// The memoize function is a higher-order function that takes a function as an argument and returns a new function that memoizes the results of the original function. It uses a closure to store the cache and access it when needed.  

// This pattern is useful for optimizing functions that have expensive computations or repetitive calculations. By storing results in a cache, we can avoid redundant work and improve performance.
