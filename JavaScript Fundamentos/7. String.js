const escola = 'Cod3r'
const nome = '            anderson de jesus chagas'

/* 
    *CharAt retorna o valor que esta no endereço solicitado
    *CharCodeAt retorna o valor unicode
    * indexOf retorna o index da valor deve ser achado
*/
console.log(escola.charAt(4))
console.log(escola.charAt(5))

//Char code at
console.log(escola.charCodeAt(3))

//Index OF
console.log('index of')
console.log(escola.indexOf('r'));

//Substring: delimita o inicio e o fim que vai mostrar da string
console.log(escola.substring(1))
console.log(escola.substring(0,3))

//concatenar
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')

//Replace: susbstitui uma letra dentro de uma string
console.log(nome.trim().length)

//split
console.log(nome.trim().split(' '))
