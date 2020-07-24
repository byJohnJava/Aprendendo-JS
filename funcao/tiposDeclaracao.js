/**
 * No caso abaixo, o interpretador do JavaScript carrega todas as
 * funções "function declaration" e depois executa o código de cima para baixo
 */

console.log(soma(4, 5))

// function declaration
function soma (x, y) {
    return x + y
}

// function expression
const sub = function (x, y){
    return x - y
}

console.log(sub(5, 2))

// named function expression
const mult = function mult(x, y){
    return x * y
}