// corpo de uma função com parâmetros REST

function soma(...valores) {
    let qtd =  valores.length; // captura a quantide de itens digitados
    // para manipulação dos valores no parametro rest é gerado um array
    let res = 0;
    for(let i = 0; i < qtd; i += 1) {
        res += valores[i];
    }
    return res;
}

console.log(soma(10,10,5,25,20,100));