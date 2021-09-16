// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// Example: 25, 20 two poisitive numbers.
// Divisors of 25 are : 1, 2, 5
// Divisors of 20 are : 1, 2, 4, 5, 10, 20
// Common divisors are 1, 5 - among them 5 is the greates. It will be the answer. 
// Source: https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-2.php

function greatestCommonDivisor(num1, num2) {
    let divisorsA = [];
    let divisorsB = [];

    let greater = num1 > num2 ? num1 : num2;
    let smaller = num1 < num2 ? num1 : num2;
    
    for(let i=1; i<=greater; i++) {
        if(greater%i === 0) {
            divisorsA.push(i);
        }
        if(i<=smaller && smaller%i===0) {
            divisorsB.push(i);
        }
    }

    let commonArray = divisorsA.filter(x => divisorsB.includes(x));
    let greatestNumber = Math.max(...commonArray);

    return greatestNumber;
}

let result = greatestCommonDivisor(25, 20);
console.log(result);