let isAtivo = false
console.log(isAtivo)

isAtivo = true;
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //força uma conversão para true ou false
/*
 * Abaixo os tipos que não são true ou false,
 * mas no contexto que é requerido irá se comportar como true
 */
console.log("Verdadeiros") 
console.log(!!3)
console.log(!!-1)             
console.log(!!' ')
console.log(!!'texto')
console.log(!![])             
console.log(!!{})             
console.log(!!Infinity)
console.log(!!(isAtivo = true))

/*
 * Abaixo os tipos que não são true ou false,
 * mas no contexto que é requerido irá se comportar como false
 */
console.log("Falsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//Expressão lógica
//o resultado da expressão abaixo é true pois contém pelo menos um valor true = ' '
console.log(!!('' || null || 0 || ' ')) 

let nome = 'André'
//Retorna o conteúdo da variável nome caso esteja preenchida
//ou retorna 'Desconhecido' se a variável estiver vazia
console.log(nome || 'Desconhecido') 