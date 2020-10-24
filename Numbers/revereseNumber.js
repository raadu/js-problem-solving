// Write a JavaScript function that reverse a number.
// Sample Data and output:
// Example x = 32243;
// Expected Output: 34223

function reverseNumber(n) {
    //convert to string and form an array of digits
    let numberArray = n.toString().split("");
    let resultArray = [];
    //loop through the array
    for (let i = 0; i < numberArray.length; i++) {
        //add element at the beginning of result array
        resultArray.unshift(numberArray[i]);
    }
    //convert result array to string
    let resultString = resultArray.join("");
    //convert string to number
    return parseInt(resultString, 10);
}

let result = reverseNumber(3224390);
console.log(result);