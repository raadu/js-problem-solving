// Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// Source: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-9.php

function swapCharacterCase(str) {
    let splitArray = str.split("");
    let resultArray = [];

    splitArray.forEach((item, index) => {
        if(item === item.toUpperCase()) {
            resultArray.push(splitArray[index].toLowerCase());
        }
        else {
            resultArray.push(splitArray[index].toUpperCase());
        }
    });

    return resultArray.join("");
    
} 

let sampleString = "The Quick Brown Fox";
let result = swapCharacterCase(sampleString);

console.log(result);