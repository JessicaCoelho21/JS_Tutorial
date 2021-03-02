for (let i = 2014; i <= 2050; i++) {
    //0 -> janeiro, 1 -> dia 1
    let date = new Date(i, 0, 1);

    if (date.getDay() === 0) {
        console.log("1st January is being a Sunday in " + i)
    }
}