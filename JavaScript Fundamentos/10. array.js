/*
    Array em JS:
    Heterogenio: varios tipos(int, string,etc) de variaveis em um array
    Não tem tamanho fixo

    Porém o ideal é que o array seja heterogenio
 */

 const valores = [7.7, 8.9, 6.3, 9.2]
 console.log(valores[0], valores[3])
 console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

/* retira o ultimo valor do array*/
console.log(valores.pop())

/* outra forma de excluir */
delete valores[0]
console.log(valores)

console.log(typeof valores)