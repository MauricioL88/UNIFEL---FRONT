// Objetos em JS é similar ao Dict do Python - São conjunto de chave e valores

const pessoa = {
    nome: 'João',
    cpf: 123456789
}

// chamada por dotted notation
console.log(pessoa.nome);

// chamada por bracket notation
console.log(pessoa['cpf']);

const carro = {
    carro1 : {
        modelo: 'Uno',
        marca: 'Fiat',
        ano: 1999
    },
    carro2: {
        modelo: 'Pálio',
        marca: 'Fiat',
        ano: 2010
    }
};

console.log(carro.carro1.ano);
console.log(carro.carro2);
console.log(carro);

const car = carro.carro2

console.log(car);