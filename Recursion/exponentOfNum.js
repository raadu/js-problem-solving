// Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
// Solve it with Recursion

function exponentOfNumber(num, exp) {
    if(exp === 1) {
        return num;
    }
    else {
        return num * exponentOfNumber(num, exp-1);
    }
}

let result = exponentOfNumber(2, 4);
console.log(result);
