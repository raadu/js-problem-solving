//Write a simple JavaScript program to join all elements of the following array into a string.
//Source: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-5.php

function arrayJoin (a, joinString) {
    return a.join(joinString);
}
  
  let exampleArray = ["Te", "sti", "cle", " Mon", "st", "er"];
  
  console.log(arrayJoin(exampleArray, ","));
  console.log(arrayJoin(exampleArray, "+"));
  console.log(arrayJoin(exampleArray, "-"));
  console.log(arrayJoin(exampleArray));