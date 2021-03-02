const readLine = require('readline')

let number = Math.floor((Math.random() * 10) + 1);
console.log(number);

const userNumber = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

userNumber.question('Guess a number between 1 and 10: ', (answer) => {
    if(number == answer) {
        console.log('Good work!')
    } else {
        console.log('Not matched!')
        console.log('The correct number was ' + number);
    }

    userNumber.close();
});

