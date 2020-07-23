let dobro = function (a) {
    return a * 2
}

dobro = (a) => {
    return a * 2
}

dobro = a => 2 * a // return implícito

console.log(dobro(10))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // underline não significa ausência de parametro
console.log(ola())