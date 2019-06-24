//armazena o this em uma constante e no momento que precisar dessa constante com o this é so usar a constante que o guarda

function Pessoa(){
    this.idade = 0

    // esse diz é a intancia do this que queros
    const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000) //a cada 1000 milisegundos essa função vai ser disparada
}

new Pessoa 

//concluindo, conforme feito no código acima, a variavel self é a constante de this. Dessa forma, não importa que chama a função eu garanto que o this está funcionando da forma esperada.