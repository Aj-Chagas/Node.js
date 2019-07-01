// hoisting é um insamento, ou seja, a varivel declarada sobe para cima
// hoisting is JavaScript's default behavior of moving declarations to the top

//exemplo

console.log('a = ', a)
var a = a
console.log('a =', a)

//esse codigo acima é o mesmo que o codigo abaixo. isso é um hosting, porém ele é jeito pela linguagem javascript
var a
console.log('a = ', a)
a = 2
console.log('a =', a)


// isso é apenas para conhecimento