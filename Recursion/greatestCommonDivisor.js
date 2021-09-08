// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// Example: 25, 20 two poisitive numbers.
// Divisors of 25 are : 1, 2, 5
// Divisors of 20 are : 1, 2, 4, 5, 10, 20
// Common divisors are 1, 5 - among them 5 is the greates. It will be the answer. 
// Source: https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-2.php
// Solve it with RECURSION

function greatestCommonDivisor(num1, num2) {
    if(!num2) {
        return num1;
    }

    return greatestCommonDivisor(num2, num1%num2);
}

let result = greatestCommonDivisor(25, 20);
console.log(result);
