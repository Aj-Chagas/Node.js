// middleware pattern  ( chain of responsibility )
//https://docs.google.com/presentation/d/10AZ1_0pWsAdHt0AFf9IidZ0_gEomzYxQJtwLEHE3iG4/edit#slide=id.g5d57c2a0e6_0_12

//contexto é um objeto que vai sendo passado de um passo para outro
//next = quando chamado é passado para o proximo passo
const passo1 = (contexto, next) =>{
    contexto.valor1 = 'middleware1'
    next()    
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'middleware2'
    next() 
}

const passo3 = (contexto) => contexto.valor3 = 'middleware3'


const exe = (contexto, ...middlewares) =>{
    const executarPasso = indice =>{
        middlewares && indice < middlewares.length && 
            middlewares[indice](contexto, () => executarPasso(indice + 1))
    }
    executarPasso(0)
}

const contexto = {}
exe(contexto, passo1, passo2, passo3)
console.log(contexto)