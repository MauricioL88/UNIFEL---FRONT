const products = [
    {name: 'SSD 1 TB', price: 350},
    {name: 'Fonte', price: 250},
    {name: 'Mouse Gamer', price: 70},
    {name: 'Teclado Mecânico', price: 60}
];

const result = products.map((elemento) => {
    return {name: elemento.name, price: elemento.price - 30};
});

console.log(result);
