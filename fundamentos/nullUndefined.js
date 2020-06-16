let valor // não inicializada
console.log(valor) // exibe undefined

valor = null // ausência de valor, não referencia nenhum objeto na memória
console.log(valor)
//console.log(valor.toString()) // erro

const produto = {}
console.log(produto.preco) // exibe undefined, pois não foi definido um atributo preco para o objeto produto
console.log(produto) // exibe um objeto vazio

produto.preco = 100.00
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)




