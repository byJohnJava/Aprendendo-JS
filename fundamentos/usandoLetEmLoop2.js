const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[0]() // Exibirá o valor do momento da iteração 
funcs[5]() // Exibirá o valor do momento da iteração 