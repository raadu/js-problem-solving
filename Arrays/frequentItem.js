// Write a JavaScript program to find the most frequent item of an array.
// Sample array: var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output: a ( 5 times )

// Source: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-8.php

function frequentItems(arr) {
    let mapping = {};
    for(let i=0; i<arr.length; i++) {
        if(mapping.hasOwnProperty(arr[i])) {
            mapping[arr[i]] += 1;
        }
        else {
            mapping[arr[i]] = 1;
        }
    }

    let frequentItem = Object.keys(mapping).reduce((a, b) => mapping[a] > mapping[b] ? a : b);
    return `${frequentItem} (${mapping[frequentItem]} times)`;
}

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9];
let result = frequentItems(arr1);

console.log(result);