// Check if a provided number is palidrome or not
// Without converting the number tp string

const isPalindrome = function (x) {
  let num = x;
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  console.log(x);
  return x === reversed ? true : false;
};

let result = isPalindrome(121);
console.log(result);
