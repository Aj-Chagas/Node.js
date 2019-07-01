console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Anderson')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

//adicionando elementos no array
aprovados[3] = 'Paulo'
aprovados.push('Alex')
console.log(aprovados.length)

//adicionando elemento pulando alguns index
aprovados[9] = 'Rafael'
console.log(aprovados.lenght)
console.log(aprovados[8] === undefined)

console.log(aprovados)

//ordena o array
aprovados.sort()
console.log(aprovados)

//excluindo atributos
delete aprovados[1] // delete dessa forma, apenas define o index para o qual aponta como undefined
console.log(aprovados[1])
console.log(aprovados[2])

//splice serve para adicionar e remover
Aprovados = ['Bia', 'Carlos', 'Anderson']
//lendo o code splice: apartir do indice 1 excluir um elemento
//splice(1,2) = apartir do indice 1 excluir os proximos do elementos. (incluindo o indice 1)
aprovados.splice(1,2, 'Elemento1', 'elemento2') //add elemento 1, elemento 2
console.log
