const imprimirResultado = function(nota){
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(6)
/* cuidado para não passar valores que não são do tipo esperado, 
 * no caso abaixo será impresso Reprovado, pois a string 'Epa!' não é maior que 7
 * como Javascript é fracamente tipado, é feito esse tipo de comparação
 */
imprimirResultado('Epa!') 