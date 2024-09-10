const products = [
    { name: 'computador', price: 2000 },
    { name: 'fone', price: 1000 },
    { name: 'PS5', price: 3500 },
    { name: 'celular', price: 1500 },
];

const result = products
    .filter(({ price }) => price > 1500)
    .map(({ name }) => name);


const result2 = products.map((product) => {
    if(product.price > 1500) {
        return product.name;
    }
}).filter((product) => {
    return product != undefined;
});

console.log(result2);
