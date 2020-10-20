//Write a JavaScript program that accept two integers and display the larger.
//Source: https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-1.php

function ask() {
    let inputumber = parseInt(prompt("Enter number"), 10) 
    if(isNaN(inputumber) || inputumber===undefined) {
      ask();
    }
    else {
      return inputumber;
    }
}
  
function largest() {
    let num1 = ask();
    let num2 = ask();
    return num1>num2 ? num1 : num2>num1 ? num2 : "Both Are Same";
}

console.log(largest());