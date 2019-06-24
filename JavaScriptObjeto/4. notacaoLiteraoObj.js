const a = 1
const b = 2
const c = 3

//versao antiga
const obj1 = {a: a, b: b, c:c}

//versao nova 2015
const obj2 = {a, b, c}
console.log(obj1, obj2)


const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//versao antiga
const obj5 = {
    funcao1: function(){
        //..;
    },
    //versao nova 2015
    funcao2(){

    }
}

console.log(obj5)



