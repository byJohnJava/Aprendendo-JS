const valores = [7.7, 8.3, 9.2, 6.4]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'test') //função push, insere novos valores no array
console.log(valores)

console.log(valores.pop()) //remove o último elemento do array
delete valores[5] //remove o elemento na posição informada
console.log(valores)

console.log(typeof valores) //Arrays são do tipo Object