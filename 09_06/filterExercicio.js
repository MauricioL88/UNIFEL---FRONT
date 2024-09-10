const products = [
    {name: 'computador', price: 3500},
    {name: 'fone', price: 80},
    {name: 'celular', price: 1000},
    {name: 'teclado', price: 200}
];

const result = products.filter((product) => {
    return product.price < 1000;
});

console.log(result);
