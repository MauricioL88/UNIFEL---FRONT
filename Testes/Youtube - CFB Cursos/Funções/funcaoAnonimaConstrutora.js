// Os argumentos da função construtrora são strings, sendo que o último é como deve retornar.
const soma = new Function("v1","v2","return v1 + v2");

console.log(soma(15,5));