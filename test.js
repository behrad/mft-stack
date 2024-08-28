const stack = require('./')

stack.push('behrad')
stack.push('jafar')
stack.push('ali')

console.log(`length=${stack.length()}`)

console.log(stack.pop())
console.log(stack.pop())

console.log(`length=${stack.length()}`)

console.log(stack.pop())

console.log(`length=${stack.length()}`)

console.log(stack.pop())