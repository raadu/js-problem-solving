//Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
//Area of triangle when 3 sides are given is = root over p(p-a)(p-b)(p-c)
//Where perimeter, p = (a+b+c)/2
//source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-4.php

let a = 5;
let b = 6;
let c = 7;
let p = (a+b+c)/2;
let result = Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(result);
