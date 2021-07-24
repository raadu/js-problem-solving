// Bubble Sort Algorithm by using a separate swap function

let arr = [2,3,6,1,8,9,5,4,7,10];

function swap(sampleArray, a, b) {
  let temp = sampleArray[a];
  sampleArray[a] = sampleArray[b];
  sampleArray[b] = temp;
}

function sortArray(providedArray) {
  while(true) {
    let swapped = false;

    for(let i=0; i<providedArray.length-1; i++) {
      if(providedArray[i+1] < providedArray[i]) {
        swap(providedArray, i, i+1);
        swapped = true;
      }
    }
    if(!swapped) break;
  }
}

sortArray(arr);
console.log(arr);