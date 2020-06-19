// O escopo global do Node é module.exports
// O escopo global do browser é window

let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports) // equivalente a module.exports = { c: 456, d: false, e: 'teste' }

