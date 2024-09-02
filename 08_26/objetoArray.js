const dadosPessoa = [
    {
        pessoa: {
            nome: 'Mauricio',
            cpf: '123456789'
        },
        banco: {
            agencia: '0001',
            conta: 1,
            saldo: 30.0
        }
    },
    
    {
        pessoa: {
            nome: 'Evelin',
            cpf: '123456799'
        },
        banco: {
            agencia: '0001',
            conta: 2,
            saldo: 1500.0
        }
    }    
];

// Acessando valores
console.log(dadosPessoa[0].banco.saldo);
console.log(dadosPessoa[1].banco.saldo);

// Adicionando atributos
dadosPessoa[0].pessoa.idade = 36;

console.log(dadosPessoa[0].pessoa);
