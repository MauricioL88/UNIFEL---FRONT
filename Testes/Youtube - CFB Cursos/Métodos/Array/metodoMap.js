// const cursos = ['HTML','CSS','PHP','JS','React','SQL'];

// cursos.map((elemento, index) => {
//     console.log("Curso: "+elemento+" - Posição do Curso na lista: "+index);    
// });

let el = document.getElementsByTagName("div");
// Para manipular uma coleção HTML é necessário converter os elementos em um array
const alterado = [...el];

alterado.map((elemento) => {
    console.log(elemento);    
});