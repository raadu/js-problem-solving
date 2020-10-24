//Write a JavaScript function that checks whether a passed string is palindrome or not?
//Note: A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome(text) {
    //Trim text and remove empty space, coma or any other special characters
    let trimmedText = text.toLowerCase().replace(/[^a-zA-z0-9]+/g, '');
    //convert string to array
    let textArray = trimmedText.split("");
    let resultArray = [];
    //loop through the array
    textArray.forEach((i) => {
        //Add element at the beginning of result array
        resultArray.unshift(i);
    })
    //join array and make a string
    let reversedString = resultArray.join("").toString();

    //conditional checking
    if (trimmedText === reversedString) {
        return "Plaindrome";
    }
    else {
        return "Not Palindrome";
    }
}

console.log(isPalindrome("Nurses Run"));
console.log(isPalindrome("Amore, Roma"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("fox"));