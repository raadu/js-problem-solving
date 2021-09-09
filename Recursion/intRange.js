// Write a JavaScript program to get the integers in range (x, y).
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
// Source: https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-3.php

function intRange(x, y) {
    if(y-x === 2) {
        return [x+1];
    }
    else {
        var resultArray = intRange(x, y-1);
        resultArray.push(y-1);
        return resultArray;
    }
}

let result = intRange(1,7);
console.log(intRange(1,7));
