let num1 = 1
let num2 = 2

num1++ // incremento postfix
num1-- // decremento postfix
++num1 // incremento prefix
console.log(num1)
--num1 // decremento prefix
console.log(num1)

// o resultado abaixo é true porque o incremento na variável num1 foi executado antes da comparação
// e o decremento foi executado depois da comparação
console.log(++num1 === num2--)
console.log(num1, num2) // Aqui num1 é igual a 2, num2 é igual a 1