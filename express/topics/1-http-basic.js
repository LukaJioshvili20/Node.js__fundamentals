const http = require('http')
const { readFileSync } = require('fs')
// Get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeSyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req, res)=>{
    const url = req.url
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }else if( url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }else if( url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeSyles)
        res.end()
    }else if( url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/js'})
        res.write(homeLogic)
        res.end()
    }else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})

server.listen(5000)