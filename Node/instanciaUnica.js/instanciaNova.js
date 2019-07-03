// Uma factory retorna um novo objeto, ou seja, outras instancias 

module.exports = () => {
    return{
        valor: 1,
        incrementar(){
            this.valor++
        }
    }
}