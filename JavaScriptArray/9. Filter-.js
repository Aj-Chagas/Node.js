/*
    *
    * Sempre que for preciso filtrar um array. utiliza-se filter
*/

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'Ipad', preco: 4199, fragil: true},
    { nome: 'Copo de plastico', preco: 12.49, fragil: true},
    { nome: 'Copo de vidro', preco: 18.99, fragil: false}
]

const produtoMaiorQue2500 = elem => elem.preco > 2500
const nomeProduto = elem => elem.nome
const produtosFragil = elem => elem.fragil === true

const resultado = produtos.filter(produtoMaiorQue2500).map(nomeProduto)
console.log(' nome dos produtos caros: ', resultado)

const resultado2 = produtos.filter(produtoMaiorQue2500)
const resultado3 = produtos.filter(produtosFragil)
const resultado4 = produtos.filter(produtoMaiorQue2500).filter(produtosFragil)

console.log('\n produtos caros: ', resultado2)
console.log('\n produtos frageis: ', resultado3)
console.log('\n produtos frageis e caros: ', resultado4)


