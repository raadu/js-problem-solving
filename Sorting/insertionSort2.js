// Insertion sort with just extra swap function

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function insertionSort(a) {
    let arr = [...a];

    for(let i=1; i<arr.length; i++) {
        for(let j=i; j>0; j--) {
            if(arr[j] < arr[j-1]) {
                swap(arr, j, j-1);
            }
        }
    }

    return arr;
}


let sampleArray = [5, 3, 4, 6, 8, 7, 9, 1, 2, 10];
let result = insertionSort(sampleArray);

console.log(result);