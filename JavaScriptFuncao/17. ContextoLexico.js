//contexto lexico é o contexto de como as coisas foram declarada na linguagem

const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}


function exerc(){
    const valor ='local'
    minhaFuncao()
}