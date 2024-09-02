/**
 * 5.Utilizando for, descubra o maior valor contido no array e imprima-o.
 */

const num = [10,9,3,11,68,16,102,8,30,21];
let maior = 0;

for(let i = 0; i < num.length; i++) {
    if(num[i] > maior) {
        maior = num[i];
    }
}

console.log('Maior número: '+maior);
