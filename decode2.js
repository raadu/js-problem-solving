const { Base64 } = require("js-base64");
var opn = require('opn');
const encodedStringPart1 = "aHR0cHM6Ly9mb3Jtcy5nbGUvWU";
const encodedStringPart2 = "5ZXQ0d2NRWHVLNnNwdjU=";
const st = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < st.length; i++) {
	let result = Base64.atob(encodedStringPart1 + st[i] + encodedStringPart2);
    console.log(i, result, encodedStringPart1 + st[i] + encodedStringPart2);
    opn(result);  
}

//solution: aHR0cHM6Ly9mb3Jtcy5nbGUvWUg5ZXQ0d2NRWHVLNnNwdjU=