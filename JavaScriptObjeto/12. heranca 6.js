function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até breve', 456)

console.log(aula1, aula2)

//O que acontece quando operador new

//simulando o New

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'bem-vindo', 123)
const aula4 = novo(Aula, 'até logo', 456)
console.log(aula3, aula4)
