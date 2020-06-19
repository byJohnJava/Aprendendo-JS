//Destructuring ES6 -> Destruturar em uma função

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {min: 10, max: 50} // cria um objeto com os valores definidos
console.log(rand(obj)) // passo o objeto como parametro para função rand
console.log(rand({min: 980})) // altero o valor padrão do parametro min, irá exibir um número entre 980 e 1000
console.log(rand({})) // passo um objeto vazio como parametro, 
//irá exibir um número entre 0 e 1000 que são os valores padrões