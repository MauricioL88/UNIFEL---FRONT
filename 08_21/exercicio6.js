/**
 *  6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não
    exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
 */

const num = [10,9,3,11,68,16,102,8,30,21];
let cont = 0;
for(let i = 0; i < num.length; i++) {
    if(num[i] % 2===1) {
        cont+=1;
    }
}

if(cont > 0) {
    console.log(cont+' valor(es) ímpar(es) encontrado(s).');
} else {
    console.log('Nenhum valor ímpar encontrado.');
}