
function Pessoa(){
    this.idade = 0

    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

//como vimos uma função arrow não varia o this.
