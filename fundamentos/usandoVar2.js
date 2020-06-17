var numero = 1
{
    // var não respeita escopo de bloco sem ser function
    var numero = 2 // Aqui a variável é sobrescrita com o valor = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)