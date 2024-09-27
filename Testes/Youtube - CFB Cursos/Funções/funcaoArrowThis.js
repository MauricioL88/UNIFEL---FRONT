function aluno(nome, nota) {
    /* 
        criando variaveis com os mesmos nomes dos parametros, adicionando o "this"
        para diferenciar que estas variáveis pertencem ao escopo da função.
    */
    this.nome = nome;
    this.nota = nota;

    // variáveis não vinculadas com as originais
    this.dados_anonimo = function() {
        setTimeout(function(){
            console.log(this.nome);
            console.log(this.nota);            
        },2000);
    }
    
    /* 
        devido à sintaxe da arrow function, permite que os dados sejam acessados
        a partir das variávies originais pertencentes à função aluno. 
    */
    this.dados_arrow = function() {
        setTimeout(() => {
            console.log(this.nome);
            console.log(this.nota);            
        },2000);
    }
}

const aluno1 = new aluno("Mauiricio",10.0);

// retorna undefined
aluno1.dados_anonimo();
// retorno dos dados normalmente
aluno1.dados_arrow();