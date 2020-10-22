//Write a JavaScript program to compute the greatest common divisor (GCD) of two integers.
//Source: https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-11.php

function greatestCommonDivisor(x, y) {
    //store greatest common divisor here
    let gcd;
    //to get results for negative values, make properties absolute
    let a = Math.abs(x);
    let b = Math.abs(y);
    //looping through and check if gcd found
    for (let i = 0; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

let result = greatestCommonDivisor(54, 24);
console.log(result);