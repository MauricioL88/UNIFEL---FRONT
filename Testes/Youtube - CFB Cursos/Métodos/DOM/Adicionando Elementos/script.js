const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")

// Criando um novo elemento no DOM
const novoElemento = document.createElement("div") // Criando uma "div"

// Adicionando um atributo e inserindo um valor do atributo
novoElemento.setAttribute("id","c7")
novoElemento.setAttribute("class","curso c1")

// Adicionando uma valor para o Elemento
novoElemento.innerHTML = "ReactNative"

// Adicionando com elemento filho num elemento pai
caixa1.appendChild(novoElemento)

// Criando os valores dos elemento dinâmicamente
const cursos = ["HTML","CSS","JavaScript","PHP","React","MySQL"]

cursos.map((elemento,chave) => {
    const novoElementoLista = document.createElement("div")
    novoElementoLista.setAttribute("id",`c${chave+1}`)
    novoElementoLista.setAttribute("class","curso c1")
    novoElementoLista.innerHTML = elemento
    caixa1.appendChild(novoElementoLista)
})