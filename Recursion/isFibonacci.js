// Write a JavaScript program to find if a given number is in fibonacci series
// The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
// Each subsequent number is the sum of the previous two.

// First try (my own method - without recursion)
function isFibonacci(n) {
    if(n===0 || n===1) {
        return true;
    }
    else if (n>1) {
        // loop will iterate highest 1000 times to find if number exists in fibonacci
        let target = 1000;
        let a = 0;
        let b = 1;
        let sum = 0;

        // for i=0, fibonacci number is 0
        // for i=1, fibonacci number is 1
        // Both are checked at the first if condition above. So no need of first 2 iterations (loops)
        // Starting with i=3

        for(let i=3; i<=target; i++) {
            sum = a+b;
            a = b;
            b = sum;

            // if sum matches with n then, n exists in fibonacci series
            if(sum === n) return true;
            // If sum gets past n, greater than n, then it does not exists in fibonacci series
            if(sum > n) return false;
        }
    }
    else {
        return `Number not supported`;
    }
}

// Method 2 (More efficient)
// Perfect Square: If a number is a result of two same numbers multiplied. Example: 4X4=16, 12X12=144. 5X5-25 etc
// If 5*(num*num)+4 OR 5*(num*num)-4 is a perfect square, then it is a fibonacci number
// Though it may not work when fibonacci series gets a lot bigger

function isPerfectSquare(n) {
    return n>0 && Math.sqrt(n) % 1 === 0;
}

function isFibonacci2(num) {
    let checkNum = 5*(num*num);
    return isPerfectSquare(checkNum+4) || isPerfectSquare(checkNum-4);
}

// METHOD-3 (With Recursion)
function isFibonacci3(num, a = 0, b = 1) {
    if(num === 0 || num === 1) {
        return true;
    }

    let nextNumber = a+b;

    if(nextNumber === num) {
        return true;
    }
    else if(nextNumber > num) {
        return false;
    }
   
    return isFibonacci3(num, b, nextNumber);
}

let result = isFibonacci(144);
// let result = isFibonacci2(144);
// let result = isFibonacci3(144);

console.log(result);
