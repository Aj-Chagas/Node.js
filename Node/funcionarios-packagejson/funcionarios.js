const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinese = elem => elem.pais === 'China'
const mulheres = elem => elem.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then( response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios
        .filter(chinese)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})


//procurar todos china, mulheres e menor salario