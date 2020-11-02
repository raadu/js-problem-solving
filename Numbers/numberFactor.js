//Write a JavaScript function to compute the factors of a positive integer.

function numberFactor(n) {
    let resultArray = [];
  
    if(n>=0) {
      for(let i=0; i<=n; i++) {
        if(n%i===0) {
          resultArray.push(i);
        }
      }
    }
    else {
      return "Only posititive numbers allowed";
    }
    return resultArray;
  }
  
  let result = numberFactor(16);
  console.log(result);