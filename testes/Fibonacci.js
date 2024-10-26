function pertenceFibonacci(numero) {
    if (numero < 0) return "Número inválido. Informe um número não-negativo.";

    let a = 0, b = 1;

    while (a <= numero) {
        if (a === numero) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }
    
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
}


let numero = 21;
console.log(pertenceFibonacci(numero));
