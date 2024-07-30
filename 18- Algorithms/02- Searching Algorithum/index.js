
// Linear Search
// Linear Search is a straightforward searching algorithm that checks each element in a list sequentially until the desired element is found or the list ends.


// Binary Search
// Binary Search is a more efficient algorithm for finding an element in a sorted list. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the value in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. The process continues until the target element is found or the interval is empty.

// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=


// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

function linearSearch(arr , target){
    for(let i =0 ;i<arr.length ; i++){
        if(arr[i] === target){
            return i;
        }
    }
}

const arr = [2,5,9,8,4,6,44,2,6,545,6,5]
// console.log(linearSearch(arr , 44));



// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.


const binarySearch = (arr , target) => {

    let start = 0;
    let end = arr.length-1;
    while(start <=end){
        let half = Math.floor((start+end)/2);
        if(arr[half] === target){
            return half;
        }
        else if(arr[half]> target){
            end = half-1
        }
        else{
            start = half+1
        }
    }
    return 'Not Found '
}

const arr2 = [2,4,6,8,10,12,14]
console.log("binary search")
console.log(binarySearch(arr2 , 12));