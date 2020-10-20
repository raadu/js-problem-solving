//Write a JavaScript program to display the current day and time in the following format.
//Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Staurday"];
let todayDate = new Date();
let day = todayDate.getDay();
let hour = todayDate.toLocaleString("en-US", {
  hour: "numeric", 
  hour12: true
});
let minute = todayDate.getMinutes();
let second = todayDate.getSeconds();

console.log("Today is:",dayName[day]);
console.log(hour+" : "+minute+" : "+second);
