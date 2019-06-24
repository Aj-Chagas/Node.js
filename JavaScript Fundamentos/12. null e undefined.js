let valor// não inicializada
console.log(valor)// ==  undefined

// null significa que a variavel não tem valor primitivo e tbm não aponta para nenhum lugar na memoria

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) // vai gerar erro, pois a variavel valor é nula

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(produto)
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)


/* obs: sempre que precisar zerar o valor de uma variavel       deve se usar o null
*/