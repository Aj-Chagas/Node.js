console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)


//nesse cenario de uma funcao o this aponta para global e fora o this aponta para o modulo
function logThis() {
    console.log('Dentro de uma funcao')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '...'
}

logThis()