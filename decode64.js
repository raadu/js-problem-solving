var atob = require('atob');
var opn = require('opn');

let mainString = "aHR0cHM6Ly9mb3Jtcy5nbGUvWU5ZXQ0d2NRWHVLNnNwdjU=";
let validOne = "aHR0cHM6Ly9mb3Jtcy5nbGUvWU5Z";
let validTwo = "2NRWHVLNnNwdjU=";
let invalid = "XQ0d";
let chars = ["A", "B", "C", "D", "E", "F", "G", 
"H", "I", "J", "K", "L", "M", "N", "O", "P", 
"Q", "R", "S", "T", "U", "V", "W", "X", "Y", 
"Z", "a", "b", "c", "d", "e", "f", "g", "h", 
"i", "j", "k", "l", "m", "n", "o", "p", "q", 
"r", "s", "t", "u", "v", "w", "x", "y", "z", 
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let invalidArr = invalid.split("");
let result = [];

chars.forEach((i) => {
    let invalidArrCopy = [...invalidArr];
    invalidArrCopy.splice(3, 0, i);
    let base64String = validOne+invalidArrCopy.join("")+validTwo;

    result.push(atob(base64String));
});

result.forEach((res) => {
    opn(res);
});

console.log(result.length);
