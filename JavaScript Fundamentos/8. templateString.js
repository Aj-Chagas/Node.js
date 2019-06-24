/*
    *Concatenação em javascript não é possivel quebrar linha
*/

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}`


    /*
        *esse simbolo ${} significa interpolação, ou 
            interpretação
        *O tempate mostra exatamento como foi programado, incluido os espaços
    */

//expressoes ...
console.log(concatenacao, template);

//dentro de expressoes é possivel chamar uma função
const up = s => s.toUpperCase()

console.log(`ei... ${up('vai toma no cú')}`)

/*
    *up = nome da função
    *texto é o paramento
    * => é a chamada da funcao
*/