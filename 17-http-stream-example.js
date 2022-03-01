const http = require('http')
const fs = require('fs')

http.createServer( function(req, res){
    // This Send big file to the website ( not Good for perfromacne )
    //const text = fs.readFileSync('./content/big.txt', 'utf-8')
    // res.end(text)


    // This Sends files in chunks
    // Transfer-Encoding: chunked
    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
    fileStream.on('open', ()=>{
        fileStream.pipe(res)
    })  
    fileStream.on('error', (err)=>{
        res.end(err)
    })
}).listen(5000)