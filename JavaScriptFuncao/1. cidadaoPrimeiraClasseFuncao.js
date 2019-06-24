//Funcao em JS é first-Class Object (Citizens)
// Higher-order function


//retorno é opcional, caso não retornada sempre retorna undefined

//Criar de forma literal
function fun1(){ }

//armazenar em uma variável
const fun2 = function(){ }

//armazenar em um array
const array = [function(a, b) {return a + b}]
console.log(array[0](2,3))
console.log(array[0](5,3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){ return 'Opa'}
console.log(obj.falar())

//passar funcao como parametro para outra funcao
function run(fun){
    fun()
}

run(function(){ console.log('Executando... ')})

//Uma funçao pode retornar/conter um funcao

function soma(a,b){//
    return function(c){// so executa quando tem todos parametros
        console.log(a + b + c)
    }
}

soma(2,3)(4)

//forma para chamar soma
const cincoMais = soma(2,3)
cincoMais(4)