
const express = require('express')
// Envoking Express module
const app = express()

app.get('/', (req, res)=>{
    console.log()
    res.send('This is home page')
})


app.get('/about', (req, res)=>{
    console.log()
    res.status(404).send('This is about page')
})

app.all('*', (req, res)=>{
    res.status(404).send('<h1>Page you are looking for not found</h1>')
})

app.listen(5000 , ()=>{
    console.log('server on port 5000...');
    }
)

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen