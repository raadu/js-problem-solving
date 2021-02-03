function isValid(s) {
    let stack = [];
    let map = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }

    for(let i=0; i<s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        }
        else {
            let last = stack.pop();
            if(s[i] !== map[last]) {
                return false;
            };
        }
    }

    return stack.length === 0 ? true : false;
} 

let result = isValid("([{()}]");
console.log(result);