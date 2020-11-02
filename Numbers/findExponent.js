//Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
//Source: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-15.php


function findExponent(b, n) {
    return Math.pow(b, n);
}
  
console.log(findExponent(2, 3));