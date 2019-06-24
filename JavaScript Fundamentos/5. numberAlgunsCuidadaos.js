// divisao impossivel, retorna um infinity
console.log(7/0)

//nesse caso temos o 10 que é uma string e o 2 que o number. Em muitas linguagens isso não daria certo, mas em javascript tudo é possível kkk. O javascript tenta verificar se a string é possivel virar number e caso seja verdadeiro ele faz a conta normalmente

//funciona
console.log("10"/2)
console.log("10.1" / 2)

//não funciona, pois ele não consegue transforma a para "show" em number
// NAn = not a number
console.log("show" / 2)

//alguns operações podem gerar algum tipo de imprecisão, pois essa é a regra que geralmente as liguagns utiliza essa especicação de tipo flutuante.

console.log(0.1 + 0.7)


