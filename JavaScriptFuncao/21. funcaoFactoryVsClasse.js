//this me permite o acesso do objeto instanciado
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu Nome é: ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()


const criarPessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()