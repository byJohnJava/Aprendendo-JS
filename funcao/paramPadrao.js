// Estratégia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // neste caso 0 + 0 + 0 retorna false e exibido o valor padrão


// Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1 // se o valor passado como argumento for diferente de undefined será exibido o valor de a 
    b = 1 in arguments ? b : 1 // se houver o valor de b passado como argumento será exibido
    c = isNaN(c) ? 1 : c // se o valor passado passado como argumento for um número será exibido
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0)) // neste caso a soma dos zeros resultará em 0


// Valor padrão do ES2015
function soma3 (a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0)) 