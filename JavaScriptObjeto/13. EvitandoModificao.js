// Object.preventExtensions. não deixa add conteudo no objeto, mas permite alterar o valor e deletar

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})

//teste se foi criado com o extencivel
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal = selar. nao deixa adicionar e nem deletar, mas pode modificar

const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

//Object.freeze = é um objeto constante, ou seja, não é permitido deletar, alterar e nem adicionar.