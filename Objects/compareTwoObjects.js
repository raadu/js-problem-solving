//1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.
//Source: https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-1.php

let object1 = {
    "name": "Thania",
    "age": 22,
  };
  
  let object2 = {
    "name": "Tonmoy",
    "age": 22,
    "location": "Dhaka"
  };
  
  function compareTwoObjects(obj1, obj2) {
    return Object.keys(obj2).every((key) => obj1.hasOwnProperty(key) && obj1[key] === obj2[key]);
  }
  
  let result = compareTwoObjects(object1, object2);
  console.log(result);