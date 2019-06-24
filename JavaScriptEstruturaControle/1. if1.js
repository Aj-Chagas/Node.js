function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)


//nesse caso do is ele vai verificar se o que foi enviado é verdadeiro ou falso. Na documentação tem uma tabela dos itens que javascript retorna verdadeiro
function seForVerdadeiroEuFalo(valor){
    if (valor){
        console.log('é verdade:  '+ valor)
    }
}

//vai enviar undefined
seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo(' ')
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo('?')
seForVerdadeiroEuFalo([1, 2])
seForVerdadeiroEuFalo({})
