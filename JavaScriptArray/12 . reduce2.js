const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

//Desafio 1:  Todos os alunos são bolsistas?


const resultado1 = alunos.map(elem => elem.bolsista).reduce((resultado, bolsista) =>  resultado && bolsista)

console.log(resultado1)

//Desafio 2: Algum aluno é bolsista?

const resultado3 = alunos.map(elem => elem.bolsista).reduce((resultado, bolsista) => resultado || bolsista )

console.log(resultado3)