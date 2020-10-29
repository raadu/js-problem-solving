//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//Source: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-6.php

function longestWord(str) {
    let strArray = str.split(" ");
    let lengthArray = {};

    for (i in strArray) {
        lengthArray[strArray[i]] = strArray[i].length;
    }

    let valueArray = Object.values(lengthArray);
    let max = Math.max(...valueArray);

    return (Object.keys(lengthArray).find(key => lengthArray[key] === max));
}

let result = longestWord("The quick brown fox");
console.log(result);