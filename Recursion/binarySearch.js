// Implemenet a binary search
// Binary Search Concept: https://www.tutorialspoint.com/data_structures_algorithms/binary_search_algorithm.htm
// Do it RECURSIVELY

function binarySearch(arr, n, low, high) {
    let sampleArray = [...arr];
    let target = n;
    let lowerbound = low;
    let upperbound = high;
    let midPoint = Math.floor((upperbound+lowerbound)/2);

    console.log('midPoint: ', midPoint);
    
    if(target > sampleArray[upperbound] || target < sampleArray[lowerbound]) return "Target does not exists";
    if(upperbound < lowerbound) return "Target does not exists";

    if(upperbound >= lowerbound) {
        if(sampleArray[midPoint] < target) {
            lowerbound = midPoint + 1;
            return binarySearch(sampleArray, target, lowerbound, upperbound);
        }
        else if(sampleArray[midPoint] > target) {
            upperbound = midPoint - 1;
            return binarySearch(sampleArray, target, lowerbound, upperbound);
        }
        else if(sampleArray[midPoint] === target) {
            return midPoint;
        }
    }
    else {
        return "Not Found";
    }
}

let arr = [1,4,7,9,12,18,27];
let result = binarySearch(arr , 9, 0, arr.length-1);

console.log(result);
