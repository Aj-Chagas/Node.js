const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
const notasBaixas1 = []

for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log('notabaixas 1', notasBaixas1)


//Com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log('notabaixas 2',notasBaixas2)

//Com callBack e usando Arrow
const notasMenorQue7 = nota => nota < 7
notasBaixas3 = notas.filter(notasMenorQue7)

console.log('notabaixas 3',notasBaixas3)
