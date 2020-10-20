//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
//Source: https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-5.php

function checkOddEven(a) {
    for(let i=0; i<a.length; i++) {
      let result;
      if(a[i]%2===0) {
       console.log(`${a[i]} is Even`);
      }
      else {
        console.log(`${a[i]} is Odd`);
      }
    }
  }
  
  let numbers = [1,2,3,4,5,6,7,8,9,10,-5,0,-25];
  let result = checkOddEven(numbers);
  
  console.log(result);