const express = require('express')
// Envoking Express module
const app = express()
const { products } = require('./data')

app.get('/', (req, res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res)=>{
    const newProducts  = products.map((product)=>{
        const {id, name, image } = product
        return {id, name, image }
    })

    res.json(newProducts)
})


app.get('/api/products/:productID', (req, res)=>{
    const {productID} = req.params

    const singleProduct = products.find((product)=> product.id === Number(productID))
    if(!singleProduct){
        return res.status(404).send('Product does not exits.')
    }

    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res)=>{
    res.send('Hello There !')
})

app.get('/api/v1/query', (req, res)=>{
    const {search, limit} = req.query
    let sortedProducts  = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))

    }
    if(sortedProducts.length<1){
        // req.status(200).send('None of our products matched your current search.')
        return res.status(200).json({
            success: true,
            data: []
        })
    }

    return res.status(200).json(sortedProducts)
})

app.all('*', (req, res)=>{
    res.status(404).send('<h1>Page you are looking for not found</h1>')
})

app.listen(5000 , ()=>{
    console.log('server on port 5000...');
    }
)