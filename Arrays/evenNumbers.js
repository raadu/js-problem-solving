// /Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
//Source: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-6.php

function evenNumbers(a) {
    let b = (""+a).split("").map(Number);
    let result = [];
    b.forEach((x, i) => {
      if(b[i-1]%2===0 && b[i]%2===0) {
        result.push("-", x);
      }
      else {
        result.push(x);
      }
    })
    return result.join("");
  }
  
  console.log(evenNumbers(254680986));