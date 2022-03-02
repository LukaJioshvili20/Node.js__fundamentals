// CommonJS, every file is module ( by Default )
// Modules - Encapulated Code ( only share minimum)
const names = require('./4-names')
const sayHello = require('./5-utilities')

const data = require('./6-alternative')

// sayHello(names.user01)
// sayHello(names.user02)
// sayHello('Luka')


// This immediately envokes the code inside of this file
require('./7-mind-grenade')
