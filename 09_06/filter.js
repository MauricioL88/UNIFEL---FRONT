const numbers = [4, 5, 6, 7, 8, 9, 10];

// retorna os números menores que 10
const result = numbers.filter((number) => {
    return number < 10;
}).map((number) => {
    return number + 10; 
});

console.log(result);
