function Pessoa() {
    this.idade = 0

    const self = this;
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 500) 
}

new Pessoa

/*
 * Para o caso acima, ou utiliza a function bind para referenciar o objeto Pessoa
 * Ou cria uma constante recebendo o objeto pessoa
 * 
 */