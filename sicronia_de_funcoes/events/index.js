const EventEmitter = require('events')

class MyEmmiter extends EventEmitter {}

const myEmmitter = new MyEmmiter()
const eventName = 'user:click'

myEmmitter.on(eventName, (click) => {
    console.log('Usuário clicou:', click)
})

myEmmitter.emit(eventName, 'Clicou na tela')

const stdin = process.openStdin()
stdin.addListener('data', (value) => {
    console.log('Você digitou:', value.toString().trim())
})