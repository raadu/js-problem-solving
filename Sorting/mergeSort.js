//Write a JavaScript program to sort the items of an array.
//I thought Merge Sort will be better
//So I followed this sorting algorithm
//Source: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-7.php
//Merge sort code with explanantion: https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060


function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while(leftIndex<left.length && rightIndex<right.length) {
      if(left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; //move left array pointer to 1 step ahead
      }
      //if left[leftIndex] > right[rightIndex]
      else {
        resultArray.push(right[rightIndex]);
        rightIndex++; //move right array pointer to 1 step ahead
      }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

function mergeSort(unsortedArray) {
    //No need to sort the array if it has only one element
    if(unsortedArray.length<=1) {
        return unsortedArray;
    }

    //Array will be divided into half. Need to find the middle point
    const middle = Math.floor(unsortedArray.length/2);

    //Array divided into left array and right array
    const left = unsortedArray.slice(0,middle);
    const right = unsortedArray.slice(middle);

    //Using recursion to combine left and right array
    return merge(mergeSort(left), mergeSort(right));
}

let sampleArray = [3, 8, 7, 6, 5, -4, 3, -2, 1];
console.log("sorted array result", mergeSort(sampleArray));