function calcAge(age) {
    if(age>-1) {
        return age*365;
    }
    else {
        return null;
    }
}

let result = calcAge(20);
console.log(result);