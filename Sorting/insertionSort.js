function insertionSort(a) {
    //copy array
    let copyArray = [...a];

    for (let i = 1; i < copyArray.length; i++) {
        for (let j = i; j > 0; j--) {
            if (copyArray[j] < copyArray[j - 1]) {
                //swap
                const temp = copyArray[j];
                copyArray[j] = copyArray[j - 1];
                copyArray[j - 1] = temp;
            }
        }
    }
    return copyArray;
}

let arr = [4, 1, 2, 8, 6, 3, 10, 5, 9, 7, -8, 0, -2];
console.log(insertionSort(arr));
console.log(arr);