//Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
//Source: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php

function isPrime(n) {
    if (n <= 0) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
        else {
            return true;
        }
    }
}

let result = isPrime(11);
console.log(result);