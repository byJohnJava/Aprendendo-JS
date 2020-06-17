{
    {
        {
            {
                var global = 'Essa variável é visível em qualquer lugar do programa'
                console.log(global)
            }
        }
    }
}

console.log(global)

function testeLocal(){
    var local = "Essa variável é visível apenas no escopo da função"
    console.log(local)
}

testeLocal()
//console.log(local) // Retornará um erro, variável não definida