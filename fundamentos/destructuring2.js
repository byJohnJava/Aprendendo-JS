//Destructuring ES6 -> Destruturar um ou mais dado(s) de um array

const [a] = [10] 
console.log(a) // Exibe o valor do elemento do array

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] 
console.log(n1, n3, n5, n6) // Exibe o primeiro elemento do array, terceiro, o quinto não possui valor e o último é 0