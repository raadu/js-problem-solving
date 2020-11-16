//Write a JavaScript function that returns array elements larger than a number.
//Source: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-19.php

function largerThanNumber(arr, n) {
    let resultArray = arr.filter((num) => num > n);
    return resultArray;
}
  
let arr = [1,2,5,10,11,15,18,90];
let result = largerThanNumber(arr, 10);
console.log(result);