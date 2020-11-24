//Calculate the sum of natural number up to n 

function sum(n) {
    if (n === 0) {
        return null;
    }
    return n + sum(n - 1);
}

let result = sum(5);
console.log(result);