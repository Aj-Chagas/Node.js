const jogador = {
    nome: "Kaz",
    classe: "Bárbaro",
    raca: "Minotauro",
    habilidade: {
        nome: "Furia",
        descricao: "Ao entrar em fúria o jogador recebe apenas metado do dano de inimigos",
        dano: {
            fisico: 2,
            magico: 0
        }
    }
}
 
function getHabilidade({habilidade}) {
 
    function getDano({dano}) {
        const {fisico, magico} = dano
        return `Dano físico: +${fisico}\nDano mágico: +${magico}`
    }
    console.log(habilidade.nome);
    console.log(habilidade.descricao);
    console.log(getDano(habilidade));
}
 
getHabilidade(jogador)