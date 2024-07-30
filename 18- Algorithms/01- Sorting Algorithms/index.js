// ### Bubble Sort
// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the list is sorted.

// ### Quick Sort
// Quick Sort is an efficient, divide-and-conquer sorting algorithm that selects a 'pivot' element, partitions the array into elements less than and greater than the pivot, and recursively sorts the sub-arrays.

// ### Selection Sort
// Selection Sort is a simple sorting algorithm that repeatedly finds the smallest element from the unsorted portion of the list and swaps it with the first unsorted element, moving the boundary of the sorted portion one element to the right each time.



// Task 1 : Implement the bubble sort algorithm to sort an array of in ascending order. Log the sorted array.

function bubbleSort(arr) {
    let arrlength = arr.length;
    for(let i = 0 ; i< arrlength ; i++){
            for(let j =0 ; j<arrlength-i-1 ; j++){
                if(arr[j] > arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
    }
}

let arr = [5, 3, 8, 4, 2, 1, 9, 7, 6];
bubbleSort(arr);
console.log(arr);


// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function selectionSort(arr) {
    let arrlength = arr.length;
    for(let i = 0 ; i< arrlength ; i++){
        let min = i;
        for(let j = i+1 ; j<arrlength ; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
}

let arr2 = [5, 3, 8, 4, 2, 1, 9, 7, 6];
selectionSort(arr2);
console.log(arr2);




// Task 3: Implement the quicksort algorithm to sort an array of numtærs in ascending order. Log the sorted array.

function quickSort(arr, left, right) {
    if(left < right){
        let pivot = partition(arr, left, right);
        quickSort(arr, left, pivot-1);
        quickSort(arr, pivot+1, right);
    }
}

function partition(arr, left, right){
    let pivot = arr[right];
    let i = left - 1;
    for(let j = left ; j < right ; j++){
        if(arr[j] < pivot){
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i+1];
    arr[i+1] = arr[right];
    arr[right] = temp;
    return i+1;
}

let arr3 = [5, 3, 8, 4, 2, 1, 9, 7, 6];
quickSort(arr3, 0, arr3.length-1);
console.log(arr3);
