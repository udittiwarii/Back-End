const express = require("express")
const connnectToDB = require("./src/db/db")




connnectToDB()
const app = express()
app.use(express.json())



app.get('/' , (req ,res)=>{
    res.json({
        message:"hello wold"
    })
})


app.post("/notes" ,(req , res)=>{
    const {title , content} = req.body
    console.log(title , content)
})

app.listen(3000, ()=>{
    console.log("The Server is running on port 3000")
})