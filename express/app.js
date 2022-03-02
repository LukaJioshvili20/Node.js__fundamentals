// console.log('Everything is working !')

const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('User just hit the server');
})

server.listen(5000)