let today = Date.now();
let date = new Date(today);
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

console.log((month + 1) + "-" + day + "-" + year + ", " + (month + 1) + "/" + day + "/" + year);
console.log(day + "-" + (month + 1) + "-" + year + ", " + day + "/" + (month + 1) + "/" + year);
