const products = [
    {name: 'fone', price: 1000},
    {name: 'notebook', price: 3000},
    {name: 'computador', price: 2000},
    {name: 'teclado', price: 500},
    {name: 'celular', price: 2500}
];

// Somando todos os valores do objeto
const total = products.reduce((acumulador, product) => {
    return acumulador + product.price;
}, 0);

console.log(total);
