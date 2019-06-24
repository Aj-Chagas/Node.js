//armazena o this em uma constante e no momento que precisar dessa constante com o this é so usar a constante que o guarda

function Pessoa(){
    this.idade = 0

    //dispara uma outra funçao apartir do intervalo que foi passado
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //a cada 1000 milisegundos essa função vai ser disparada
}

//vai dar ruim pois que ta fazendo a chamada é a propria função interval e o this mudou

new Pessoa 

//porem o problema do codigo acima foi resolvido na linha 10 utilizando o bind e passando para ele o this. Dessa forma, o this do objeto agora passa a ser o mesmo this da funcao
