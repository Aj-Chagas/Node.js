//A função do acento da crase é de indicar que se trata de uma template string, e não de uma string comum (que é delimitada por aspas duplas ou simples). Template string tem uns recursos diferentes de uma string comum, como visto na seção 3.

//Já a função do $ mais { } é de indicar que haverá uma interpolação, ou seja, se o que tiver dentro das chaves for uma variável ou constante, resgatará o valor delas, por exemplo:

const nome = "João"
 
console.log(`Meu nome é ${nome}`)
// imprime: Meu nome é João
//A interpolação também faz com que um cálculo seja interpretado, veja:

const nascimento = 1990
console.log(`Minha idade é ${2019 - nascimento}`)
// imprime: Minha idade é 29
//Enfim, com interpolação também é possível chamar funções:

function idade(nascimento, anoAtual){
    return anoAtual - nascimento
}
 
const nascimento = 1990
console.log(`Minha idade é ${idade(nascimento, 2019)}`)
// imprime: Minha idade é 29
//Qualquer outra dúvida, só falar ;)