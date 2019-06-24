const funcs = []

for (let i =0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

//usando var ele não respeita a variavel (i)
funcs[0]()
funcs[8]()