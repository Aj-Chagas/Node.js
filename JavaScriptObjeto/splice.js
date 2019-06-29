const arr = [1, 2, 3, 4, 5, 6]
const aux = [...arr].reverse().splice(1) //o splice retorna o que excluiu
 
 
console.log(arr.concat(aux))