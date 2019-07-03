//this é uma referencia para module.exports
console.log(module.exports === this)
console.log(module.exports === exports)

//formas de exportar
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

//Porém no final das contas apenas quem será retornado é o:
//module.exports

//concluindo o exports e this são apenas referencias para o mesmo objeto que o module.exports aponta.

