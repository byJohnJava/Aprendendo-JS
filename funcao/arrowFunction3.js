let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // global é o objeto do Node

const obj = {}
comparaComThis = comparaComThis.bind(obj) // Aqui o this aponta para o obj por conta do bind
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // Aqui o this não aponta para o global, porque é uma arrow Function
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // Neste caso a arrow function não permite a mudança de referência através do bind 
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
