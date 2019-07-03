// O node faz cache, ou seja, o varavel valor vai para a cache e se o node encontra ela na cache ela vai sempre usar a mesma instancia

module.exports = {
    valor: 1,
    incrementar(){ 
        this.valor++ 
    }
}


