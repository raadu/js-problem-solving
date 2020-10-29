//Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
//Source: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-11.php

function secondLowestGreatest(arr) {
    let result = [];

    if (arr.length === 1) {
        return arr[0];
    }
    else {
        let sortedArray = arr.sort((a, b) => { return a - b });
        result.push(sortedArray[1]);
        result.push(sortedArray[sortedArray.length - 2]);

        return result.join(",");
    }
}

let arrayNumbers = [1, 9, 2, 50, 7, 4];
let result = secondLowestGreatest(arrayNumbers);
console.log(result);