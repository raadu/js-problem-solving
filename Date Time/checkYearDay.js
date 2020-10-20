//Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.
//Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-7.php

let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let startYear = 2014;
let endYear = 2050;

for(startYear; startYear<=endYear; startYear++) {
 let checkDate = new Date(`${startYear}-01-01`);
 if(dayArray[checkDate.getDay()]==="Sunday") {
   console.log("1st January of year "+startYear+" is Sunday");
 }
}
