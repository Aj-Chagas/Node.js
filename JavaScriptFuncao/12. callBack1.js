 //a grosso modo callback é chamar uma funcao sempre que um vento ocorre. Outro exemplo é uma requisicao ajax que é um callbacks
 
 const fabricantes = ['Mercedes', 'Audi', 'BMW']

 function imprimir(nome, indice) {
     console.log(`${indice + 1}. ${nome} `)
 }

 fabricantes.forEach(imprimir)
 fabricantes.forEach((nomeVeiculo, indice) => console.log(indice + 1 + '. ' + nomeVeiculo))