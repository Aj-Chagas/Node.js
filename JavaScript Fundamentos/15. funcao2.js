// Armazenando uma funcao em uma variavel
//funcao anonima
const imprimirSoma = function(a,b){
    console.log(a+b)
}

imprimirSoma(2,5)


//Armazenado uma funcao arrow em uma variavel. forma reduzida de ter uma    funcao
//essa setinha substitui o nome da funcao
const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))

//Retorno Implicito
const subtracao = (a, b) => a - b //essa forma pode ser escrita quando a                                        funcao tem apenas uma linha
console.log(subtracao(5,2))