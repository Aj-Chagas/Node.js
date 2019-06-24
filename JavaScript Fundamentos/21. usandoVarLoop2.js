const funcs = []

for (var i =0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

//usando var ele não respeita a variavel (i)
funcs[2]()
funcs[8]()