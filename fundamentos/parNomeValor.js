// nome/valor
const saudacao = "Olá" // contexto léxico 1

function exec(){
    const saudacao = "Hello"
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'João',
    idade: 22,
    peso: 70,
    endereco: {
        logradouro: "Rua Sabiá",
        numero: 8
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)