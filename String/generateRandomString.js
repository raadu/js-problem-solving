// Write a JavaScript function that generates a string id (specified length) of random characters. Go to the editor
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//Source: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-20.php

function randomStringGenerator() {
    let randomString = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charLength = characters.length;
   
    for(let i=0; i<charLength; i++) {
      randomString +=  characters.charAt(Math.floor(Math.random()*charLength))
    }
   
    return randomString;
   }
   
let result = randomStringGenerator();
console.log(result);