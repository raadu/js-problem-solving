//Take positive integer. n = 14
//replace the number by the sum of the squares of its digits. 1 sqauer + 4 square = 1+16 = 17
//repeat until sum equals to 1

function happyNumber(n) {
    let numArray = n.toString();
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum += Math.pow(numArray[i], 2);
    }

    if (sum !== 1) {
        happyNumber(sum);
    }

    return `${n} is happy number`
}

let result = happyNumber(49);
console.log(result);
  //1, 7, 10, 13, 19, 49 etc are happy numbers