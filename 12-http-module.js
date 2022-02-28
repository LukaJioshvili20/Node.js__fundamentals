const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our Home Page')
    }
    if(req.url === '/about'){
        res.end('Welcome to our About Page')
    }
    res.end(`
    <h1>Oops !</h1>
    <p>We can not find the page you are looking for!</p>
    <a href="/">Go Back to Home Page</a>
    `)
})

server.listen(5000)