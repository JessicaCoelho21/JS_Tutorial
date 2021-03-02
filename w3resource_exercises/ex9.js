let today = Date.now();
let date = new Date(today);
let christmas = new Date(date.getFullYear(), 11, 25);
let day = 1000 * 60 * 60 * 24;
let untilChristmas = Math.floor((christmas.getTime() - date.getTime()) / (day));

console.log("There's " + untilChristmas + " days left until Christmas!");