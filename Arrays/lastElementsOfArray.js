//Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
//Source: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-4.php

function last(a, n) {
    if(n===undefined || n===null) {
      return a.slice(a.length-1);
    }
    else if(a===undefined || a===null) {
      return void 0;
    }
    else if (n<0) {
      return [];
    }
    else {
      return a.slice(-n);
    }
  }
  
  console.log(last([7, 9, 0, -2]));
  console.log(last([7, 9, 0, -2],3));
  console.log(last([7, 9, 0, -2],6));
  console.log(last([7, 9, 0, -2],-4));