const products = [
    { name: 'computador', price: 2000 },
    { name: 'fone', price: 1000 },
    { name: 'PS5', price: 3500 },
    { name: 'celular', price: 1500 },
    { name: 'notebook', price: 3000 },
    { name: 'teclado', price: 500 },
];


// Método Find: retorna o primeiro item que atenda a condição estabelecida
// const result = products.find(({ price }) => price >= 3000);

// console.log(result);

// ForEach : mesma função do map, porém sem retorno
products.forEach(({ name }) => {
    if (name == 'PS5') name = 'PS5 Pro';
});

console.log(products);
