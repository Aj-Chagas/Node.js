function Carro(velocidadeMaxima = 200, delta = 5){
    
    //atributo privado
    let velocidadeAtual = 199

    //metodo publico a parti da do this. O this torna o metodo publico
    //let e const são privados
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //outro metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())
