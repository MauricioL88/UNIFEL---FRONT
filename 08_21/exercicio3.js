/**
 * 3. Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é
    o resultado da soma de todos os elementos dividido pelo número total de elementos.
 */

const num = [10,9,3,11,68,16,102,8,30,21];
let somaTotal = 0;

for(let i = 0; i < num.length; i++) {
    somaTotal += num[i];    
}

let media = somaTotal / num.length;

console.log('A média aritmética é: '+media);