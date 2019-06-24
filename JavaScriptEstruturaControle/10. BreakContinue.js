
// O break e o continue causam desvio no codigo
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// no caso do break causa o desvio para parar a execução do for
for (let x in nums){
    if(x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

// no caso do continue causa uma pausa no for, como se fosse um pulo e contiua a execucao
for (let y in nums){
    if(y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}