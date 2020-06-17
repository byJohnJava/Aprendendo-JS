//Destructuring ES6 -> Destruturar um ou mais dado(s) de um objeto

const pessoa = {
    nome: 'Pablo',
    idade: 18,
    peso: 50,
    endereco: {
        logradouro: 'Av. Brasil',
        numero: 1000
    }

}

const { nome, idade } = pessoa // Acessa o atributo nome e idade do objeto pessoa
console.log(nome, idade)

/*
 * Acessa o atributo nome atribui a variavel n 
 * e idade atribui a variavel i do objeto pessoa
 */
const {nome: n, idade: i} = pessoa 
console.log(n, i)

/*
 * Não acha o atributo sobrenome e exibe undefined 
 * Não acha o atributo altura e exibe o valor atribuido, que é 'false'
 */
const {sobrenome, altura = false} = pessoa
console.log(sobrenome, altura)

/*
 * Acessa os atributos logradouro e número
 * de forma aninhada, porque endereço está dentro de pessoa
 */
const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)