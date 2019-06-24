/*
    * O que é uma função factory?
    * é uma funcao que retorna um objeto
*/
// isso sao varia instancia de prod. Para nao gerar esses varios codigos. Basta usar uma funcao factory
const prod1 = {
    nome: 'sfds',
    preco: 45
}

const prod2 = {
    nome: 'sfds',
    preco: 45
}

const prod3 = {
    nome: 'sfds',
    preco: 45
}


//Factory Simples

//embora não tenha a notação new. A funcao esta criando instancias de pessoa
function criarPessoa(){
    return{
        nome: 'ANA',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

