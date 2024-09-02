/**
 * 2.Some todos os valores contidos no array e imprima o resultado
 */

const num = [10,9,3,11,68,16,102,8,30,21];
let somaTotal = 0;

for(let i = 0; i < num.length; i++) {
    somaTotal += num[i];    
}

console.log('Resultado final da soma: '+somaTotal);
