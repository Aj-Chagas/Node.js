function tratarErroELancar(erro){
    //throw new Error('....fudeu....')
    //throw 10
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('FINAL')
    }
}


const obj = {name: 'roberto'}
imprimirNomeGritado(obj)




































































































