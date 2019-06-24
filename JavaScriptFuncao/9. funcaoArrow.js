//funcao arrow sempre é uma função anonima, então para chamar ela, deve coloca em uma variavel

//func tradicional
let dobro = function(a){
    return 2 * a
}


//func arrow
dobro = (a) =>{
    return 2 * a
}

//funcao de um unico comando pode ser escrita como abaixo. Dessa forma o retorno é implicito.
dobro = a => 2 * a 

console.log(dobro(2))


//func tradicional
let ola = function(){
    return 'Olá'
}

//func arrow
ola = () => 'Olá'

//outra Forma
ola = _ => 'ola'