const valores = [30, 100, 10, 2, 25, 150, 500, 201];

const maior = (...numeros) => {
    let res = 0;
    for(let i = 0; i < numeros.length; i += 1) {
        if(numeros[i] > res) {
            res = numeros[i];
        }
    }
    return 'Maior número: '+res;
};

console.log(maior(30, 50, 25, 4));
