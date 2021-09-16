// Write a JavaScript program to get the first n Fibonacci numbers.
// The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
// Each subsequent number is the sum of the previous two.
// Use RECURSION

function fibonacci(n) {
    if(n===0 || n===1) {
        return n;
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

let result = fibonacci(7);
console.log(result);
