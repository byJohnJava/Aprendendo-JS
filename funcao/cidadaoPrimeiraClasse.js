// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar função de forma literal
function fun1() { }

// Armazenar uma função em uma variável
const fun2 = function () { }

// Armazenar uma função em um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](5, 5))

// Armazenar uma função em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar uma função como parâmetro
function run(fun){
    fun()
}

run(function () { console.log('Running...') })

// Uma função pode retornar/conter outra função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(10, 5)(9) // primeiro exemplo de utilização
const quinzeMais = soma(10, 5) // segundo exemplo de utilização
quinzeMais(9)