//Write a JavaScript function that returns a passed string with letters in alphabetical order.
//Source: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-4.php

function sortString(str) {
    let strArray = str.split("");
    let sortedArray = strArray.sort();
    return sortedArray.join("");
}

let result = sortString("webmaster");
console.log(result);