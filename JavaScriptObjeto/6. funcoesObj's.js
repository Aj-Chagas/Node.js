const pessoa = {
    nome: 'alex',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});


Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: '01/01/2017'
})

console.log('limpa')
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

console.log(pessoa)

//Object.assign "concatena obj"(ECMAScript 2015)
const destino = { a: 1 }
const obj1 = { b: 2 }
const obj2 = { c: 3, d:4 }
const obj = Object.assign(destino, obj1, obj2)
console.log(obj)


