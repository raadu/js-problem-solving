//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
//Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-5.php

let name = "raadu";

//First Way 
//Iterrate through string
for (i in name) {
  name = name[name.length-1]+name.substring(0, name.length - 1);
  console.log(name);
}

//Second Way
//Split string into array then iterate through array

// splittedName = name.split("");

// splittedName.forEach((i) => {
//   splittedName.unshift(splittedName[splittedName.length-1]);
//   splittedName.pop();
//   console.log(splittedName.join(""));
// })
