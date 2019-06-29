// Cadeia de protótipos (prototype chain)

Object.prototype.atributo0 = 'z'
const avo = { atributo1: 'A'}
const pai = { __proto__: avo, atributo2: 'b'}
const filho = { __proto__: pai, atributo3: 'c'}

//ele vai procurra no filho, depois no pai e em seguida no avo
console.log(filho.atributo1)
console.log(filho.atributo0)
console.log(filho.atributo2)
console.log(filho.atributo3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}km/h `
    }
}

const ferrari = {
    modelo: 'F40', 
    velMax: 324, //shadowing
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

const volvo = {
    modelo: 'V40',
    status(){ //sobrescrita ou sombreamento
        return `${this.modelo}: ${super.status()}`
    }
}
//dessa forma, eu estou estabelecendo quem é o prototype de ferrari
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())