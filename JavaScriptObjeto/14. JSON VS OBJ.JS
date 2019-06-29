//gerando objeto e colocando em um Json
const obj = { 
    a: 1, 
    b: 2, 
    c: 3,
    soma(){
        return a + b + c
    } 
}
console.log(JSON.stringify(obj))


//pegando Json e transformando em Obj
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3, "nome": "ana" }'))

