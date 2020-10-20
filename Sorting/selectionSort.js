function selectionSort(a) {
    //copy the array
    const array = [...a];

    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        //swap here
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}

let arr = [4, 1, 2, 8, 6, 3, 10, 5, 9, 7, -8, 0, -2];
console.log(selectionSort(arr));
console.log(arr);