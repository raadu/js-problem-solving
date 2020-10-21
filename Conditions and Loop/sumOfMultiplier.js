//Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
//Source: https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-12.php
//According to question AND (&&) should be used
//But in solution OR (||) used

function sumOfMulplier() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfMulplier());


