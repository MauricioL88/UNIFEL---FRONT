class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }
    
    getIdade() {
        return this.idade;
    }

    setNome(idade) {
        this.idade = idade;
    }
    
    saudar() {
        console.log(`Olá! Meu nome é ${this.nome}!`);        
    }

    info() {
        console.log(`Nome..: ${this.nome}`);        
        console.log(`Idade.: ${this.idade}`);        
        console.log('_____________________');        
    }
}

// Manipular os elementos
const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");

let pessoas = [];
const addPessoa = () => {
    // para não duplicar o objeto já adicionado anteriormente
    res.innerHTML = "";
    // editar os valores dos elementos
    pessoas.map((p) => {
        const div = document.createElement("div");
        div.setAttribute("class","pessoa");
        div.innerHTML = `Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}`;
        res.appendChild(div);
    });
};


btn_add.addEventListener("click", (evt) => {
    // capturando os valores no formulário, para adicionar o objeto Pessoa
    const nome = document.querySelector("#f_nome");
    const idade = document.querySelector("#f_idade");
    // Criando o objeto e adicionando os valores nos seus atributos
    const p = new Pessoa(nome.value, idade.value);
    // Adicionando valores ao array
    pessoas.push(p);
    // limpando os campos após a adição
    nome.value = "";
    idade.value = "";
    // no reiniciar, deixar o cursor no campo nome
    nome.focus();
    // exibir o no campo resultado o objeto criado
    addPessoa(); 
});