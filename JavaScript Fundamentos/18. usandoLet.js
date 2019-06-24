// o let é uma variavel local, diferente do var o let só é visivel dentro do escopo que ele foi definido

var numero = 1 
{
    let numero = 2
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)