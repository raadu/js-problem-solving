//Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
//Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-10.php

function multiply(a, b) {
  return a*b;
}

function divide(a, b) {
  return a/b;
}

let a = prompt("Enter a number");
let b = prompt("Enter another number");

console.log(multiply(a, b));
console.log(divide(a, b));
