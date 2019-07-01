/*
    *Documentação: 
    *
    *Use map() quando: é preciso traduzir/mapear todos os elementos em um array para outro conjunto de valores.
    *Exemplo: converter temperatura de Fahrenheit para Celsius.
    * 
    * font: https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/
    * 
    * 
    * O map serve para fazer uma transformação no array, ou seja, o map vai mapear 
    * o array para transforma outro array do mesmo tamanho. Exemplo: Eu tenho um array 
    * de 3 elementos e criar um novo array cuja os valores seja o dobro do array original,
    * logo, eu uso Map para fazer essa solucao.

*/ 

const fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ];
 
const celcius = fahrenheit.map( function( elem ) {
    return Math.round( ( elem - 32 ) * 5 / 9 );
} ); 
 
// arrow fuction
const celsius2 = fahrenheit.map( elem => Math.round( ( elem - 32 ) * 5 / 9 ) );
 
console.log(celcius)//  [ -18, 0, 7, 10, 24, 27, 37, 49 ]
console.log(celsius2)

//map não causa alteração no array original

//Exemplo 2:
const nums = [1, 2, 3, 4, 5]

//const resultado = nums.map(elem => elem * 2)

//console.log(resultado)

const soma10 = e => e + 10
const dobro = e => e * 2
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`


resultado = nums.map(soma10)
console.log(resultado)

resultado = nums.map(dobro)
console.log(resultado)

resultado = nums.map(triplo)
console.log(resultado)

resultado = nums.map(paraDinheiro)
console.log(resultado)

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)