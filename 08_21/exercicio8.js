let palavra = 'evelin';

function alterarPalavra(palavra) {
    // Para separ através dos apóstrofos
    let array1 = palavra.split('');
    // Reverter a posição dos caracteres.
    let arrayInvert = array1.reverse();
    // Junta os caracteres que estão separados.
    palavra = arrayInvert.join('');
    return palavra;
}

// Resultado com a palavra invertida
console.log(alterarPalavra(palavra));
