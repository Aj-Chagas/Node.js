require('./ObjetoGlobalNoNode')

console.log(MeuApp.saudacao())

console.log(MeuApp.nome)

MeuApp.nome = 'Eita! ' //Obj Freeze

console.log(MeuApp.nome)