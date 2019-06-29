// O objeto tem uma pai que é o prototypo 

//importante saber que esse prototype pai é != da propriedade prototype que
//esta disponivel nas funcoes.


const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//undefined
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) 





