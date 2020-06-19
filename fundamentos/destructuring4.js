//Destructuring ES6 -> Destruturar em uma função

function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([100, 50])) // passo como parametro do valores, sendo o primeiro maior para testar a condição if
console.log(rand([980])) // passo como parametro apenas o mínimo, o máximo será o valor padrão
console.log(rand([, 8])) // passo como parametro apenas o máximo, o mínimo será o valor padrão
console.log(rand([])) // // passo um array vazio como parametro, irá exibir um número entre 0 e 1000 que são os valores padrões
