// /Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. 
//If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
//Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-8.php

let randomNumber = Math.floor(Math.random()*2)+1;
let userInput = prompt("Enter a number: ");


function guessNumber (randomNumber, userInput) {
  if(userInput==randomNumber) {
    console.log("Matched");
  }
  else {
    console.log("Not Matched");
  }
}

guessNumber(randomNumber, userInput);

console.log(randomNumber);
console.log(userInput);

