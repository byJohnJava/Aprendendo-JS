const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[0]() // Exibirá o último valor do loop
funcs[5]() // Exibirá o último valor do loop