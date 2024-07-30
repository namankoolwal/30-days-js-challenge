// Task 8: W'rite a function to rotate an array by k positions. Log the rotatad array.


function rotateArray(arr, k) {
    let n = arr.length;
    let newArr = [];
    for(let i = 0 ; i < n ; i++){
        newArr[(i+k)%n] = arr[i];
    }
    return newArr;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotateArray(arr, k));




// Task 9: Write a function to nprge two sorted arrays into one sorted array. Log the merged array.

function mergeArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    let newArr = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            newArr.push(arr1[i]);
            i++;
        }
        else{
            newArr.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        newArr.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        newArr.push(arr2[j]);
        j++;
    }
    return newArr;
}

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

console.log(mergeArrays(arr1, arr2));
