function negativeNumbers(number1, number2) {
    console.log(number1 < 0 && number2 >= 0 || number1 >= 0 && number2 < 0);
}

negativeNumbers(-1, 1)
negativeNumbers(1, -1)
negativeNumbers(1, 1)
negativeNumbers(-1, -1)