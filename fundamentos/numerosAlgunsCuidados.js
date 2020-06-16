console.log(10 / 0) // Qualquer número dividido por 0 retorna Infinity
console.log("10" / 2) // É possível fazer operações matemáticas com tipos string
console.log('3' + 2) // Não irá somar e sim concatenar
console.log("Show!" * 2) // Retorna "NaN" que significa Not a Number
console.log(0.1 + 0.7) // O resultado não é totalmente preciso devido ao padrão que o ECMA Script utiliza
// console.log(10.toString()) // Não é possível converter um número diretamente para string
console.log((10).toString()) //Converte normalmente porque está dentro de parênteses