const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() 
}

exec() // Exibirá 'Global', porque as funções em JavaScript carregam consigo o local onde 
       // ela foi definida, ou seja o Contexto Léxico. Independente do local onde a função é chamada 