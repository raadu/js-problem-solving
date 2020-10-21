// Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes 
// of its digits is equal to the number itself. For example, 371 is an Armstrong number 
// since 3**3 + 7**3 + 1**3 = 371. 

function armsStrongNumber(n) {
    let numArray = n.toString();
    let sum = 0;

    for (let i = 0; i < numArray.length; i++) {
        sum += Math.pow(numArray[i], 3);
    }

    if (sum === n) {
        return `${n} is armstrong number`;
    }
    else {
        return `${n} is not armstrong number`;
    }
}

let result = armsStrongNumber(371);
console.log(result);