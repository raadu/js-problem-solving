// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)
// Source: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-14.php

function removeDuplicates(arr) {
    let refined = [];
    for(let i=0; i<arr.length; i++) {
        if(!refined.includes(arr[i])) {
            refined.push(arr[i]);
        }
    }

    return refined;
}

let givenArray = [10, 5, 10, "cat", "fish", 6, 10, "dog", 5, 2, 7, 3, 7, "cat", 10, "cat"];
let result = removeDuplicates(givenArray);

console.log(result);