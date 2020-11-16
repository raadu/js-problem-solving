//Add Mr. after every name
 
let name1 = "Shakib";
let name2 = "Tamim";
let name3 = "Muneer";
 
function modifier(strings, ...values) {
  const m = strings.reduce((prev, current) => {
    return prev + current + (values.length ? "Mr."+values.shift(): "");
  }, "");
 
  return m;
}
 
 
console.log(modifier `We have ${name1},  ${name2} and ${name3}`);