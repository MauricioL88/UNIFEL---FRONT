const costumer = {
    firstName: 'João',
    age: 25
};

// Criando uma função
const addProperty = (object, key, value) => {
    if(typeof object[key] === "undefined") {
        object[key] = value;
    }
};

// Chamanda da função passando os valores dos parâmetros
addProperty(costumer, 'birthPlace', '19/07/1999');

console.log(costumer);