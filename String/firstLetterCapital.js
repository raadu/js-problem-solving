//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//Source: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-5.php

function firstLettterCapital(str) {
    let strArray = str.split(" ");
    let upperCaseArray = strArray.map((i) => {
        return i[0].toUpperCase() + i.slice(1);
    })
    return upperCaseArray.join(" ");
}

let result = firstLettterCapital("the old quick brown fox");
console.log(result);