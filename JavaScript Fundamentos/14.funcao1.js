// Uma funcao é como uma receita de bolo, Ela recebe os ingredientes e devolve o bolo pronto


//Funcao sem retorno
function imprimirSoma(a, b){
    console.log('O resultado é: ' + a + b)
}

imprimirSoma(2,3)

//parametro com valor default

function soma(a, b=0){
    console.log('soma é: ' .concat(a+b))
}

soma(510)