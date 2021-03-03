function sum(number1, number2) {
    if (number1 !== number2) {
        console.log(number1 + number2)
    } else if (number1 === number2) {
        console.log((number1 + number2) * 3)
    }
}

sum(2, 3);
sum(2, 2)