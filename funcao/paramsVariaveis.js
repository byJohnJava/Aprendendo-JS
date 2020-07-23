function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i] 
    }
    return soma
}

console.log(soma()) // como não possui nenhum argumento, irá exibir 0
console.log(soma(1)) // irá exibir 1
console.log(soma(1.1, 2.2, 3.3)) // irá exibir a soma de todos os valores passados como argumento

console.log(soma(1.1, 2.2, 'Teste')) // irá exibir a soma dos dois valores númericos e concatenar com a String 
console.log(soma('a', '-', 'z')) // irá exibir o valor inicializado na variável soma mais as String concatenadas