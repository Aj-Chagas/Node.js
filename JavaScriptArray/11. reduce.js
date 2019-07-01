const alunos = [
     { nome: 'João', nota: 7.3, bolsista: false},
     { nome: 'Maria', nota: 9.2, bolsista: true},
     { nome: 'Pedro', nota: 9.8, bolsista: false },
     { nome: 'Ana', nota: 8.7, bolsista: false }
]


console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}/* , 10 (nessa linha eu posso alterar o valor inicial do acumulador)*/)

console.log(resultado)


/*
    *Como funciona essa funcao:
    *Ela recebe o acumulador que é igual ao index 0 do array e tambem o atual que é o index 1 do array
    *e depois vai somando
    *
    * é possivel alterar o valor do acumulador, ou seja, ao invex do primeiro valor ser igual ao index 0 o desenvolvedor define ele.
    * como mostra na linha 15
 */