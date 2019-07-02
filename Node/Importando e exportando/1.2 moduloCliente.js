//Modulo cliente significa que essa classe vai usar outros módulos que vamos definir

// para importar modulos no node usa - se require

const moduloA = require('./1. moduloA')
const moduloB = require('./1.1 moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log('\n')
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)

