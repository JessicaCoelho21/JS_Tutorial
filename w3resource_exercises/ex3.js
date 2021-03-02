let today = Date.now();
let date = new Date(today);
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

if (month >= 9 && day >= 10) {
    console.log((month + 1) + "-" + day + "-" + year);
    console.log((month + 1) + "/" + day + "/" + year);
    console.log(day + "-" + (month + 1) + "-" + year);
    console.log(day + "/" + (month + 1) + "/" + year);
} else if (month <= 9 && day >= 10) {
    console.log("0" + (month + 1) + "-" + day + "-" + year);
    console.log("0" + (month + 1) + "/" + day + "/" + year);
    console.log(day + "-" + "0" + (month + 1) + "-" + year);
    console.log(day + "/" + "0" + (month + 1) + "/" + year);
} else if (month <= 9 && day <= 10) {
    console.log("0" + (month + 1) + "-" + "0" + day + "-" + year);
    console.log("0" + (month + 1) + "/" + "0" + day + "/" + year);
    console.log("0" + day + "-" + "0" + (month + 1) + "-" + year);
    console.log("0" + day + "/" + "0" + (month + 1) + "/" + year);
} else if (month >= 9 && day <= 10) {
    console.log((month + 1) + "-" + "0" + day + "-" + year);
    console.log((month + 1) + "/" + "0" + day + "/" + year);
    console.log("0" + day + "-" + (month + 1) + "-" + year);
    console.log("0" + day + "/" + (month + 1) + "/" + year);
}



