let today = Date.now();
let date = new Date(today);
let weekDay = date.getDay();

//console.log(weekDay)

if (weekDay == 1) {
    console.log("Today is: Monday")
} else if (weekDay == 2) {
    console.log("Today is: Tuesday")
} else if (weekDay == 3) {
    console.log("Today is: Wednesday")
} else if (weekDay == 4) {
    console.log("Today is: Thursday")
} else if (weekDay == 5) {
    console.log("Today is: Friday")
} else if (weekDay == 6) {
    console.log("Today is: Saturday")
} else if (weekDay == 0) {
    console.log("Today is: Sunday")
}

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

//Se a hora for maior que 12, PM, senão, AM
let dayTime = (hour >= 12) ? " PM" : "AM";

console.log("Current time: " + hour + dayTime + ":" + minute + ":" + second);