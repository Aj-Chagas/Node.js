/*
    *
    * Sempre que for preciso filtrar um array. utiliza-se filter
*/
Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


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


const resultado4 = produtos.filter2(produtoMaiorQue2500)

console.log('\n produtos frageis e caros: ', resultado4)


