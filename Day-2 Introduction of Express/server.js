const express = require('express')

const app = express();// server is created

app.get('/home' , (req , res)=>{
    res.send('Hello home page ')
})

app.get('/about' , (req , res)=>{
    res.send('Hello About page')
})
app.listen(3000 , ()=>{
    console.log('Server is running on port 3000')
})