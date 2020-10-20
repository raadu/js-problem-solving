//Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
//Source: https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-7.php

for(let i=1; i<=100; i++) {
    if(i%3===0 && i%5===0) {
      console.log(i+" is FizzBuzz")
    }
    else if(i%3===0) {
      console.log(i+" is Fizz");
    }
    else if(i%5===0) {
      console.log(i+" is Buzz")
    }
  }
  
  