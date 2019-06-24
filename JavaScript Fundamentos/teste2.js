var frutas = ['Maçã', 'Banana'];

console.log(frutas.length);
var removedItem = frutas.splice(1); // é assim que se remove um item


console.log(...removedItem)
// ['Morango', 'Manga']