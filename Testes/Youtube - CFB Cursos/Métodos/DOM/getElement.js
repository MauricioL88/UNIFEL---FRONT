// capturando o elemento HTML pelo id da tag
const dc1 = document.getElementById("c1");

// retorna toda o conteúdo,tag e id que está na constante
console.log(dc1);

// retorna o id
console.log(dc1.id);

// retorna o valor
console.log(dc1.innerHTML);

// alterando o valor
dc1.innerHTML = "Java 8";

// coleção de array dos elementos HTML
const dc2 = document.getElementById("c2");
const dc3 = document.getElementById("c3");
const dc4 = document.getElementById("c4");
const dc5 = document.getElementById("c5");
const dc6 = document.getElementById("c6");

const arrayCursos = [dc1,dc2,dc3,dc4,dc5,dc6];
console.log(arrayCursos);

// percorrer e iterar
arrayCursos.map((e) => {
    console.log(e.innerHTML);    
});

/* 
    capturando elementos através da tag, é retornado uma HTMLCollection, que
    difere de um array "tradicional" que pode dificultar na manipulação
    por ter menos métodos para isso.
*/
let htmlColectionTag = document.getElementsByTagName("div");
console.log(htmlColectionTag);

// convertendo para uma array
htmlColectionTag = [...htmlColectionTag];
console.log(htmlColectionTag);

/*
    para dar uma dinâmica com a captura de elemento existem os métodos:
    - querySelector -> para selecionar o primeiro elemento encontrado;
    - querySelectorAll -> captura todos os elementos epecificados como atributo;
    
    * Selecionando elementos na tag:
    - constante.querySelectorAll("tagEscolhida");

    * Selecionando um elemento que está inclusa em outro tipo de elemento:
    - constante.querySelectorAll("elementoPai > elementoFilho");

    * Selecionando um elemento de uma classe:
    - constante.querySelectorAll(".classe");

    * Selecionando um elemento de uma id:
    - constante.querySelector("#id");

    * Selecionando mais de um elemento de vários tipos:
    - constante.querySelectorAll("#id, .classe, tag");
*/