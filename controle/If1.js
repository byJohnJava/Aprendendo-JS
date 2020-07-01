function soBoaNoticia(nota){
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(9)
soBoaNoticia(6)

function seForVerdadeEuFalo(valor){
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // retorna falso
seForVerdadeEuFalo(null) // retorna falso
seForVerdadeEuFalo(undefined) // retorna falso
seForVerdadeEuFalo(NaN) // retorna falso
seForVerdadeEuFalo('') // retorna falso
seForVerdadeEuFalo(0) // retorna falso
seForVerdadeEuFalo(-1) // retorna verdadeiro
seForVerdadeEuFalo(' ') // retorna verdadeiro
seForVerdadeEuFalo('?') // retorna verdadeiro
seForVerdadeEuFalo([]) // retorna verdadeiro
seForVerdadeEuFalo([1, 2]) // retorna verdadeiro
seForVerdadeEuFalo({}) // retorna verdadeiro


