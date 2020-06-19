console.log('01)', '1' == 1) // ' == ' compara os valores, true
console.log('02)', '1' === 1) // ' === ' compara os valores e tipos, false
console.log('03)', '3' != 3) // ' != ' compara os valores, false
console.log('04)', '3' !== 3) // ' !== ' compara os valores e tipos, true

console.log('05)', 3 < 2) // false
console.log('06)', 3 > 2) // true
console.log('07)', 3 <= 2) // false
console.log('08)', 3 >= 2) // true

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 == d2) // false, porque são objetos diferentes na memória
console.log('10)', d1 === d2 ) // false, porque são objetos diferentes na memória
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null) // true, porque está comparando os valores
console.log('13)', undefined === null) // false, porque está comparando os valores e tipos