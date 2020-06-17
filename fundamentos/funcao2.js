// Armazenando uma função em uma variável/constante
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(5, 2)

// Armazenando uma funcao arrow em uma variável/constante
const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 2))

// Função arrow com retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(10, 7))

const imprimir = a => console.log(a)

imprimir("Javascript is fun!")