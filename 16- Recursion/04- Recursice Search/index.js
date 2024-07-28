// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr, target ,start , end){
    if(start > end){
        return -1
    }

    let mid = Math.floor((start + end)/2);
    if(arr[mid] === target){
        return mid
    }
    if(arr[mid] > target){
        return binarySearch(arr ,target ,start, mid-1)
    }

    return binarySearch(arr , target , mid+1 , end)
}

console.log("Task 7: Binary search")
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 5, 0, 10))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 7, 0, 10))


console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 3, 0, 10))
// ===========================Working of binarySearch([1,2,3,4,5,6,7,8,9,10], 3, 0, 10)===========================
        // Initial array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // Target: 3

        // Initial call:
        // start = 0, end = 10
        // mid = Math.floor((0 + 10) / 2) = 5
        // arr[5] = 6
        // Since 6 > 3, search left half: binarySearch(arr, 3, 0, 4)

        // Second call:
        // start = 0, end = 4
        // mid = Math.floor((0 + 4) / 2) = 2
        // arr[2] = 3
        // Since arr[2] = 3, return 2





// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurences(arr, target){
    if(arr.length === 0){
        return 0
    }
    if(arr[0] === target){
        return 1+ countOccurences(arr.slice(1) , target)
    }
    return countOccurences(arr.slice(1) , target)
}

console.log("Task 8: Count occurrences of a target element in an array")
console.log(countOccurences([1,2,5,4,5,6,7,8,9,10], 5))
console.log(countOccurences([1,7,3,4,7,6,7,8,7,10], 7))
console.log(countOccurences([1,2,3,4,5,6,7,8,9,10], 3))



// ============================Working of countOccurrences([1, 2, 5, 4, 5, 6, 7, 8, 9, 10], 5)=========================
// Initial Call: countOccurrences([1, 2, 5, 4, 5, 6, 7, 8, 9, 10], 5)
//   |
//   v
// [1, 2, 5, 4, 5, 6, 7, 8, 9, 10] (1 != 5)
//   |
//   v
// countOccurrences([2, 5, 4, 5, 6, 7, 8, 9, 10], 5)
//   |
//   v
// [2, 5, 4, 5, 6, 7, 8, 9, 10] (2 != 5)
//   |
//   v
// countOccurrences([5, 4, 5, 6, 7, 8, 9, 10], 5)
//   |
//   v
// [5, 4, 5, 6, 7, 8, 9, 10] (5 == 5)
//   |
//   v
// 1 + countOccurrences([4, 5, 6, 7, 8, 9, 10], 5)
//   |
//   v
// [4, 5, 6, 7, 8, 9, 10] (4 != 5)
//   |
//   v
// countOccurrences([5, 6, 7, 8, 9, 10], 5)
//   |
//   v
// [5, 6, 7, 8, 9, 10] (5 == 5)
//   |
//   v
// 1 + countOccurrences([6, 7, 8, 9, 10], 5)
//   |
//   v
// ...
