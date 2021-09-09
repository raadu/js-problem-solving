function sumOfArray(arr) {
    if(arr.length === 1) {
        return arr[0];
    }
    else {
        return arr.shift() + sumOfArray(arr);
    }
}

let result = sumOfArray([1, 2, 3, 4]);
console.log(result);
