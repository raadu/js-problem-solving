// Implemenet a binary search
// Binary Search Concept: https://www.tutorialspoint.com/data_structures_algorithms/binary_search_algorithm.htm

function binarySearch(arr, target) {
    let lowerbound = 0;
    let upperbound = arr.length-1;
    let foundIndex = null;

    if(target > arr[upperbound] || target < arr[lowerbound]) return "Target does not exists";
    
    while(!foundIndex) {
        if(upperbound < lowerbound) return "Target does not exists";

        let midPoint = Math.floor((upperbound+lowerbound)/2);

        if(arr[midPoint] < target) {
            lowerbound = midPoint + 1;
        }
        else if(arr[midPoint] > target) {
            upperbound = midPoint - 1;
        }
        else if(arr[midPoint] === target) {
            foundIndex = midPoint;
        }
    }
    return foundIndex ? foundIndex : "Not found";
}

let result = binarySearch([1,4,7,9,12,18,27], 7);

console.log(result);
