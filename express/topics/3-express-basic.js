
const express = require('express')
const path = require('path')
// Envoking Express module
const app = express()

// static and middleware 
app.use(express.static('./public'))

// adding static assets - SSR
// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })


app.all('*', (req, res)=>{
    res.status(404).send('<h1>Page you are looking for not found</h1>')
})


app.listen(5000 , ()=>{
    console.log('server on port 5000...');
    }
)