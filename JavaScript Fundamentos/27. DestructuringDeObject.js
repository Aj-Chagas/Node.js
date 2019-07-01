const pessoa = {
    nome: 'anderson',
    idade: '22',
    endereco: {
        logradouro: 'Rua pacificador',
        numero: 100
    }
}

//extraindo dado de um objeto

//lendo: tire do objeto pessoa o nome e idade
const { nome, idade } = pessoa
console.log(nome, idade)

//outra forma criando nome diferentes para variaveis

const { nome:n, idade: i} = pessoa
console.log(n, i)

//outra possibilidade
const { endereco: { logradouro: rua, numero: num } } = pessoa
console.log(rua, num)

