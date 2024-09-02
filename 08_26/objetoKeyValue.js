const pessoa = {
    nome: 'Maria',
    idade: 65
}

// Captura as chaves do objeto (conjunto)
const key = Object.keys(pessoa);

// Captura os valores do objeto
const value = Object.values(pessoa)

// Captura e transfora o objeto em uma "matriz"
const entrie = Object.entries(pessoa)

console.log(`Chaves: ${key}`);
console.log(`Valores: ${value}`);
console.log(`"Matrizes": ${entrie}`);