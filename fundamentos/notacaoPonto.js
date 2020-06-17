console.log(Math.ceil(9.1))

const obj1 = {}
obj1.nome = "Mouse"
//obj1['nome'] = "Teclado" //Essa linha é equivalente a linha de cima
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log("Running...")
    }
}

const obj2 = new Obj("Celular")
const obj3 = new Obj("Carregador")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
