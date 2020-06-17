// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(10, 5)
imprimirSoma(2) // NaN
imprimirSoma(2, 5, 8, 9, 6) // Soma apenas dois parametro
imprimirSoma() // NaN

// Função com retorno
function soma(a, b = 0){ // é possível inicializar a variável no parâmetro
    return a + b
}

console.log(soma(5, 5)) 
console.log(soma(5)) // 5 + 0, pois b foi inicializado com 0
console.log(soma()) // NaN
