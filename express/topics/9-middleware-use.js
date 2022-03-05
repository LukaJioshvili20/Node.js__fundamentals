const express = require('express')
// Envoking Express module
const app = express()
const logger = require('./middleware')
const authorize = require('./authorize')
const morgan = require('morgan')
// 1. use vs route
// 2. options - our own || express || third party

// To use function ... globally in all paths
// order metters ( Can skip path if undernease)
// app.use([authorize, logger])
// apply to certain route && addes logger function to /api 
// app.use('/api', logger)
// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/',(req, res)=>{
    res.send('Home page')
})

app.get('/about', (req, res)=>{
    res.send('About Page')
})

app.get('/api/products', (req, res)=>{
    res.send('Products')
})

app.get('/api/items', (req, res)=>{
    res.send('Items')
})

app.listen(5000 , ()=>{
    console.log('server on port 5000...');
    }
)