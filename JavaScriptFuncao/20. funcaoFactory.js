
/* Exemplos do professor */

// nome, preco são os proprios nome do valor então não precisa repetir. como feito no meu exemplo
function criarProduto1(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}


console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Ipad', 1999.49))



/* meus exemplos */
function criarProduto(nome, preco, desconto = 0.0){
    return{
        nome: nome,
        preco: preco,
        desconto: desconto
    }
}

let nome = 'Havaianas'
let preco = 20.50
let desconto = 0.0
console.log(criarProduto(nome, preco, desconto))


produto = (nome, preco, desconto) =>{
    return {
        nome: nome,
        preco: preco,
        desconto: desconto
    }
}

console.log(produto(nome, preco, desconto))


