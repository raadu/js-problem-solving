// Given two arrays:
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st color is Blue ."
// "2nd color is Green."
// "3rd color is Red."

let color = ["Blue", "Green", "Red", "Orange", "Violet", 
"Indigo", "Yellow", "Blue", "Green", "Red", "Orange", "Violet", 
"Indigo", "Blue", "Green", "Red", "Orange", "Violet", "Indigo", 
"Yellow", "Blue", "Green", "Red", "Orange", "Violet", "Indigo",
"Yellow", "Blue", "Green", "Red", "Orange", "Violet", "Indigo", 
"Yellow", "Blue", "Green", "Red", "Orange", "Violet"];

let o = ["th","st","nd","rd"];

color.forEach((color, index) => {
    let ordinal = index+1;

    // Because 1st, 2nd, 3rd - 11th, 12th, 13th - 21st 22nd 23rd.....
    let ordinalLogic = (ordinal-20)%10;

    if((ordinal >= 1 && ordinal <= 3) || (ordinalLogic >= 1 && ordinalLogic <= 3)) {
        console.log(`${ordinal + o[ordinal<4 ? ordinal : ordinalLogic]} color is ${color}`);
    }
    else {
        console.log(`${ordinal+o[0]} color is ${color}`);
    }
});