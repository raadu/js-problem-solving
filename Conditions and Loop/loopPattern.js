//Write a JavaScript program to construct the following pattern, using a nested for loop.
function patternRepeat(givenString, count) {
    //Array to store pattern by line
    let resultArray = [];
    //Looping
    for (let i = 0; i < 1; i++) {
        for (let j = 1; j < count + 1; j++) {
            resultArray.push(givenString.repeat(j));
        }
    }
    return resultArray;
}

//Call function and store in result
let result = patternRepeat("*", 5);
//Showing the result using console log
result.forEach((i) => console.log(i));
