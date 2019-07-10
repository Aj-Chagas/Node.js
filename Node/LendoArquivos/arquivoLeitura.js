const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


//assincrono(esse é um metodo melhor)
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if (err === null) {
        const config = JSON.parse(conteudo)
        console.log(`${config.db.host}: ${config.db.port}`)
    }
})


//Outra forma, sincrona
const config = require('./arquivo.json')
console.log(config.db)
console.log(`${config.db.host}: ${config.db.port}`)


//leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteúdo da pasta')
    console.log(arquivos)
})