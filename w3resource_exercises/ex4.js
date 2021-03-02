let a = 5;
let b = 6;
let c = 7;

/*
    A Fórmula de Heron calcula a área de um triângulo dado o comprimento de cada um dos lados
    Fórmula de Heron: sqrt(s(s - a)(s - b)(s - c))
    Sendo que s = (a + b + c) / 2
*/

let s = (a + b + c) / 2;
let area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

console.log(area);