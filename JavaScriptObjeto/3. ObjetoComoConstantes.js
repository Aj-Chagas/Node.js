// pessoa aponta para um endereço de memória e o endero aponta para o objeto que exite lá dentro. ENTÃO o que muda é objeto dentro de pessoa e não o endereço

//pessoa -> xsd215sd ->

const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa recebe um novo endereço {...}
//porem isso vai gerar um novo endereco e é uma const vai dar erro

//pessoa = {nome:'Ana'}
//console.log()

//essa linha define o objeto constate, ou seja,
//ele agora é imutavel
Object.freeze(pessoa)

