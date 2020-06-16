const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Não retorna erro, mesmo a string não tendo esse tamanho
console.log(escola.charCodeAt(3)) // Retorna o valor da tabela ASC do caractere escolhido
console.log(escola.indexOf('o')) // Retorna o indice do caractere na palavra

console.log(escola.substring(1)) // Retorna a partir do indice passado por parametro
console.log(escola.substring(0, 3)) // Retorna a partir do intervalo inicial e final

console.log('Escola '.concat(escola).concat("!")) // Concatena strings
console.log('Escola ' + escola + "!") // Concatena strings

console.log(escola.replace(3, 'e')) // Substitui um caractere por outro de sua escolha

console.log('Ana, Maria, Pedro'.split(',')) // Gera um array separado por vírgula
