//arguments me permite ter acesso aos elementos enviados do array

//arguments é um array interno de uma funcao
function soma(){

    let soma = 0

    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1.1, 2.2, 3.3))