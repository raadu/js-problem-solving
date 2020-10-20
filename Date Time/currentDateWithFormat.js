//Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
//Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-3.php

let currentDate =  new Date();
let dd = currentDate.getDate()<10 ? "0"+currentDate.getDate() : currentDate.getDate();
let mm = currentDate.getMonth()<10 ? "0"+currentDate.getMonth() : currentDate.getMonth();
let yyyy = currentDate.getFullYear();

console.log(mm+"-"+dd+"-"+yyyy);
console.log(dd+"/"+mm+"/"+yyyy);
console.log(dd+"-"+mm+"-"+yyyy);
console.log(dd+"/"+mm+"/"+yyyy);

