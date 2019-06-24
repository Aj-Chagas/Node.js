// Criando uma variavel var fora de uma função ela é publica

//criando uma variavel var fora de uma funcao ela é publica


{
    {
        var sera = 'sera?'
    }
}
console.log(sera)


function teste(){
    var local = 123
    console.log(local)
}

teste()
//isso gerar erro
console.log(local)