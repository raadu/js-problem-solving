function bubbleSort(a) {
    let arr = [...a];
    let arrayLength = arr.length;

    while(arrayLength) {
        for(let i=0; i<arrayLength; i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        arrayLength -= 1;
    }
    return arr;
}

let sampleArray = [6,3,4,2,1,5];
let result = bubbleSort(sampleArray);
console.log(result);