const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao) //acessando o atributo do objeto
    }
}
//dessa forma OK
pessoa.falar()
//dessa outra forma vai gerar um conflito entre os paradigmas do mundo POO e Fucional
const falaar = pessoa.falar
falaar()

//para resolver pode usar o blind para garanti o valor do this
//dentro do bind eu falo para ele de que é o this
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

