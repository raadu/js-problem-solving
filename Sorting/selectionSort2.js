// Selection sort but with extra swap function

function swap(arr, i, minIndex) {
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}

function selectionSort(a) {
    let arr = [...a];

    for(let i=0; i<arr.length-1; i++) {
        let minIndex = i;

        for(j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        swap(arr, i, minIndex);
    }

    return arr;
}

let sampleArray = [4,5,1,3,2,7,6,8,10,9];
let result = selectionSort(sampleArray);

console.log(result);

