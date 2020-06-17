// Hoisting sobe a variável definida lá em baixo para o topo, apenas 'var' permite isso
console.log('a =', a)
var a = 1
console.log('a =', a)

console.log('b =', b)
let b = 2
console.log('b =', b)
