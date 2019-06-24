function rand({ min = 0, max = 1000}) {
    const randomFloat = Math.random()
    const temp = randomFloat * (max-min)
    const result = temp + min
    const resultArrendondado = Math.floor(result)
    
    console.log("Math.random() ->  " + randomFloat);
    console.log("randomFloat * (max-min) ->  " + temp);
    console.log("randomFloat * (max-min) + min->  " + result);
    console.log("Resultado arrendondado -> " + resultArrendondado);
    
    return Math.floor(result)
}
 
rand({min: 1,max: 10})



/*
Resultado:

Math.random() ->  0.15250413539179553
randomFloat * (max-min) ->  1.3725372185261597
randomFloat * (max-min) + min->  2.3725372185261597
Resultado arrendondado -> 2*/