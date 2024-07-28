// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

    function sumOfArray(arr){
        if(arr.length === 0){
            return 0
        }
        return arr[0] + sumOfArray(arr.slice(1))
    }

    console.log("Task 3: Sum of all elements in an array")
    console.log(sumOfArray([1,2,3,4]))
    console.log(sumOfArray([4,4,4,4]))
    console.log(sumOfArray([5,5,6,4]))

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.


    function maxElem(arr){
        if(arr.length === 0){
            return 0
        }

        return Math.max(arr[0], maxElem(arr.slice(1)))
    }

    console.log("Task 4: Maximum element in an array")
    console.log(maxElem([1,2,3,4]))
    console.log(maxElem([1,2,3,4]))
    console.log(maxElem([1,2,3,4]))