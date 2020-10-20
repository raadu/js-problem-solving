//Write a JavaScript function to check whether an 'input' is an array or not.
//Source: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-1.php

function is_array(a) {
  return Array.isArray(a);
}

console.log(is_array([1,2,3]));
console.log(is_array("Text test"));
console.log(is_array({"a":"1", "b": "2"}));
console.log(is_array([{a:1, b:2, c:3}]));
