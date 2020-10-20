//Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
//Source: https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-2.php

let a = 8;
let b = -7;
let c = 10;
let product = a*b*c;

if(product>0 || product===0) {
  console.log("Sign is +");
}
else {
  console.log("Sign is -")
}