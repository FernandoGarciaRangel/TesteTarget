function contarLetraA(texto) {
   
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            contador++;
        }
    }

    if (contador > 0) {
        return `A letra 'a' aparece ${contador} vezes na string.`;
    } else {
        return "A letra 'a' não foi encontrada na string.";
    }
}

let texto = "Teste da target!";
console.log(contarLetraA(texto));
