const products = [
    { name: 'computador', price: 2000 },
    { name: 'fone', price: 1000 },
    { name: 'PS5', price: 3500 },
    { name: 'celular', price: 1500 },
    { name: 'notebook', price: 3000 },
    { name: 'teclado', price: 500 },
]

const result = products
    .filter(({ price }) => price > 1500)
    .sort(({price: a},{price: b}) => b - a)
    .map(({ name, price }) => ({ name, price: price * 0.9 }));

console.log(result);
