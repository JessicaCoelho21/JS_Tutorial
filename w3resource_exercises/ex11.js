function CelsiusToFahrenheit(temperature) {
    let celsius = temperature;
    let fahrenheit = celsius * 9 / 5 + 32;
    console.log(celsius + "ºC are " + fahrenheit + "ºF");
}

function FahrenheitToCelsius(temperature) {
    let fahrenheit = temperature;
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(fahrenheit + "ºF are " + celsius + "ºF");
}

CelsiusToFahrenheit(60);
FahrenheitToCelsius(45);