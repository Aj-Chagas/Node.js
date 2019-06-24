// call e apply são duas formas diferente para chamar uma funcao


function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco *(1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4586,
    desc: 0.15,
    getPreco
}

console.log(getPreco)
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//diferenças entre call e apply

console.log(getPreco(carro, 0.17, '$'))

//no apply os parametros deve ir dentro de um array
console.log(getPreco(carro, [0.17, '$']))