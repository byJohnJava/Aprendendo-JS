const pessoa = {
    saudacao: 'Boa tarde',
    falar () {
        console.log(this.saudacao)
    }
}

pessoa.falar() // irá exibir o o conteúdo do atributo saudacao
const falar = pessoa.falar // nesta linha a constante falar não possui mais o atributo saudacao, retornando undefined
falar(); // conflito entre paradigmas: Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // passamos o objeto pessoa dentro da function bind para referenciar o this
falarDePessoa()


