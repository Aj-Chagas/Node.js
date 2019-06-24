
function Pessoa1(nome){

    this.nome = nome

    this.falar = function (){
        console.log(`Meu nome é ${nome}`)
    }

}

const pessoa = new Pessoa1('Anderson')
pessoa.falar()