const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o elemento do array, nesse caso dai o massa
console.log(pilotos)

pilotos.push('Vesrstappen')
console.log(pilotos)

/*
    * POP: remove do ultima posição
    * PUSH: Adiciona na ultima posicao
    * SHIFT: remove da primeira posicao
    * UNSHIFT: Adiciona o elemento na primeira posicao
*/

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover os elementos do array

//adcionar elementos com splice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover elementos com splice
pilotos.splice(3, 1) //sai o massa
console.log(pilotos)

//slice: Esse metodo retorna um novo array

const algunsPilotos1 = pilotos.slice(2)//gera um novo array copiando do array original, apartir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)// ele vai pegar do indice 1 até o 3, pois o 4 fica de fora
console.log(algunsPilotos2)




