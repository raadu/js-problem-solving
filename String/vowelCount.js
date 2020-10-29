//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//Source: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-7.php

function vowelCount(str) {
    let strArray = str.split("");
    let vowelCount = 0;
    strArray.forEach((i) => {
        if ((/^[aeiou]$/i).test(i)) {
            vowelCount++;
        }
    });

    return vowelCount;
}

let result = vowelCount("The quick brown fox");
console.log(result);