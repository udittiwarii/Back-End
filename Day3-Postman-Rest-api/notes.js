const express = require('express')


const app = express()// server create ho gya idhr pr 
app.use(express.json())

const notes = []

app.post("/notes" , (req , res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.json({
        message : "Succsess fully added notes",
        notes : notes
    })
})


app.listen(3000 , ()=>{
    console.log("Server is running on port 3000")
})