const pai = { nome: 'Anderson', corCabelo: 'castanho escuro'}

//ele vai criar um objeto novo tendo como prototipo o objeto pai, ao inves de cria para um prototype null
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla' //impossivel modificar
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    //console.log(key)
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por heranca: ${key}`)
}

