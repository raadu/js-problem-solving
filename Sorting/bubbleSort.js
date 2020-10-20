function bubbleSort(a) {
    arrayLength = a.length;
    while(arrayLength) {
      for(let i=0; i<arrayLength; i++) {
        if(a[i] > a[i+1]) {
          let temp = a[i];
          a[i] = a[i+1];
          a[i+1] = temp;
        }
      }
      arrayLength--;
    }
  return a;
  }
  
  let arr = [5, 4, 1, 2, 3, 6];
  console.log(bubbleSort(arr));