//fs = file system
const fs = require('fs')

//criando objeto
const produto = {
    nome: 'celular',
    preco: 1249.99,
    desconto: 0.15 
}

//transforma objeto para o json = JSON.stringify
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo!') //se aquivo for nulo então 'arquivo salvo'
})

