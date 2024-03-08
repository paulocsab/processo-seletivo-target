//Resposta 1

const resultadoSoma = document.getElementById('resultado-soma');
const INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

resultadoSoma.innerHTML = SOMA;

//Resposta 2

const fibonacciBtn = document.getElementById('btn-fibonacci');

fibonacciBtn.addEventListener('click', () => {
    const valorSequencia = Number(document.getElementById('valor-fibonacci').value);
    const resultadoFibonacci = document.getElementById('resultado-fibonacci');
    let resultArray = [];

    if (valorSequencia <= 0) {
        alert('Favor inserir um valor positivo e maior que 0 para gerar a sequência de Fibonacci.');
        return null
    }

    for (let i = 0; i < valorSequencia; i++) {
        if (i === 0 || i === 1) {
            resultArray.push(i);
        } else {
            resultArray.push(resultArray[i-2] + resultArray[i-1]);
        }
    }

    resultadoFibonacci.innerHTML = resultArray;
})


// Resposta 5

const inverterBtn = document.getElementById('btn-inverter');

inverterBtn.addEventListener('click', () => {
    const string = document.getElementById('string').value;
    const resultadoString = document.getElementById('resultado-string');
    let stringInvertida = "";

    if (string.length === 0) {
        alert('Favor digitar uma string para que ela possa ser invertida.');
        return null
    }

    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];     
    }

    resultadoString.innerHTML = stringInvertida;
})