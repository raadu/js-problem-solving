//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
//Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-6.php

let givenYear = 2020;

if((givenYear%4===0 && givenYear%100!==0) || (givenYear%400===0)) {
  console.log("Leap Year");
}
else {
  console.log("Not Leap Year");
}
