const http = require('http')

const server = http.createServer((req , res)=>{
    res.end('Hellow wold form the server')
})


server.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})
