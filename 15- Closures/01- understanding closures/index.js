// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

        const outerFunction = () => {
            const outerVar = ' i am a outer variable inside inner function'

            const innerFunction = () => {
                console.log(outerVar)
            }
            return innerFunction
        }

        const innerFunction = outerFunction()
        innerFunction()


// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.


        const counterFunction = () => {
            let count = 0

            const increment = () => {
                count++
            }

            const countValue = () => {
                return count
            }

            return { increment, countValue }
        }

        const counter = counterFunction()

        counter.increment()
        counter.increment()
        counter.increment()
        console.log(counter.countValue())