const nome = "João"
// Concatenação comum
const concatenacao = "Olá " + nome + "!" 
// Concatenação com template string e interpolação ($)
const template = ` 
    Olá
    ${nome}!`

console.log(concatenacao, template)

// Expressões 
console.log(`1 + 1 = ${1 + 1}`) 

const up = texto => texto.toUpperCase()

console.log(`Ei...${up('cuidado')}!`)