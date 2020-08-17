function criarProduto(nome, preco){
    return {
        nome, // Não é necessário fazer assim -> nome: nome, pois a variável do parametro também é "nome" 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Mouse', 485.99))
console.log(criarProduto('Notebook', 2599,99))