const charArray = ['y', 'b', 'r', 'a'];

const resultChar = charArray.sort();

console.log(resultChar);

const numArray = [9, 16, 2, 35, 4, 7, 500, 6, 81];

// ordem crescente para números
const resultNum1 = numArray.sort((a, b) => a -b);
console.log(resultNum1);

// ordem descrecente para números
const resultNum2 = numArray.sort((a, b) => b - a);
console.log(resultNum2);

const products = [
    { name: 'computador', price: 2000 },
    { name: 'fone', price: 1000 },
    { name: 'PS5', price: 3500 },
    { name: 'celular', price: 1500 },
];

const resultProd = products.filter((product) => {
    return product.price < 3500
}).sort((a, b) => {
    return a.price - b.price;
});



console.log(resultProd);
