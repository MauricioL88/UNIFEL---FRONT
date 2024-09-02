/**
 *  4. Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça
    com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média
    aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor
    da média aritmética é menor ou igual a 20”.
 */

const num = [10,9,3,11,68,16,102,8,30,21];

let somaTotal = 0;

for(let i = 0; i < num.length; i++) {
    somaTotal += num[i];    
}

let media = somaTotal / num.length;

if(media > 20) {
    console.log('O valor da média é maior que 20! Média: '+media);    
} else {
    console.log('O valor da média é menor ou igual a 20!. Média: '+media);    
}