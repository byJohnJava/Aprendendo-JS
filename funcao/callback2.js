const notas = [7.7, 6.5, 2.9, 4.3, 7.4, 9.3, 8.5]

// Sem callback 
const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log('Sem callback', notasBaixas1)

// Com callback

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log('Com callback', notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)

console.log('Com callback e arrow Function', notasBaixas3)