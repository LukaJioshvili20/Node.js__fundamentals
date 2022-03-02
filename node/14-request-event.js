// .on - listen for an event
// .event - emit an event
// listen than emit ( otherwise not working)
// .on -> .emit
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=>{
    console.log(`data recieved`);
})

customEmitter.on('response', ( name, id)=>{
    console.log(`data received user ${name} with id: ${id}`);
})

customEmitter.emit('response', 'Luka', 1618)

const http = require('http')
