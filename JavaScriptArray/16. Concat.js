// Metodo concat. A ideia é que seja possivel concatenar arrays. Detalhe o metodo não altera os array

const filhas = ['Valeska', 'Cibalena']
const filhos = ['Washington', 'Wesley']
const todosArray = filhas.concat(filhos)
console.log(todosArray)

//Os array originais continuam, como foram criados
console.log(filhos)
console.log(filhas)

console.log([].concat([1,2], [3,4], 5, [[6,7]]))