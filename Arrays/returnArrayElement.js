//Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
//Source: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-3.php

function first(a, n) {
    if(n===undefined || n===null) {
      return a.slice(0,1);
    }
    else if(a===undefined || a===null) {
      return void 0;
    }
    else if (n<0) {
      return [];
    }
    else {
      return a.slice(0,n);
    }
  }
  
  console.log(first([7, 9, 0, -2]));
  console.log(first([],3));
  console.log(first([7, 9, 0, -2],3));
  console.log(first([7, 9, 0, -2],6));
  console.log(first([7, 9, 0, -2],-3));
  