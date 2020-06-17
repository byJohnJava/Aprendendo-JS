var numero = 1
{
    // let respeita escopo de bloco sem ser function
    let numero = 2 // Aqui a variável é sobrescrita com o valor = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)