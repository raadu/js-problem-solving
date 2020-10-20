//Write a JavaScript program to calculate number of days left until next Christmas.
//Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-9.php

let today = new Date();
let currentYear = today.getFullYear();
let christmas = new Date(`${currentYear}-12-25`);
//1hour = 60 minutes, 1minute = 60seconds, 1 second = 1000 milliseconds
//Date object differece is in milliseconds. So to convert in days we have to  do difference/oneDay
let oneDay = 24*60*60*1000;

if(today>christmas) {
  let result = (today-christmas)/oneDay;
  console.log(Math.ceil(result));
}
else if (christmas>today) {
  let result = (christmas-today)/oneDay;
  console.log(Math.ceil(result));
}
else {
  console.log("Today is christmas");
}
