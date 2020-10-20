//Write a JavaScript conditional statement to find the largest of five numbers.
//Source: https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-4.php

function largestNumber(a) {
    //declare largest as the first array element
    largest = a[0];
  
    //if current array element in loop is bigger than largest
    //then that array element will be the largest
    for(let i=0; i<a.length; i++) {
      if(largest<a[i]) {
        largest = a[i];
      }
    }
  
    return largest;
  }
  
  let numbers = [-5, -2, -6, 0, -1, 7, 1];
  let result = largestNumber(numbers);
  console.log(result);