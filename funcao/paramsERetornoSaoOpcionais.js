function area(largura, altura){
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²`)
    } else {
        return area
    }
}

console.log(area(2,2)) 
console.log(area(2)) // retorna NaN
console.log(area()) // retorna NaN
console.log(area(2, 5, 9, 17, 15)) // retorna o cálculo apenas dos dois primeiros parametros
console.log(area(5, 5)) // exibe a mensagem no console e retorna undefined
