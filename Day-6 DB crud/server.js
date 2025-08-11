const express = require('express')
const connectToDB = require('./src/db/db')
const noteModel = require('./src/models/note.model')

const app = express()
app.use(express.json())

app.post("/notes", async (req, res) => {
    const { title, content } = req.body
    await noteModel.create({
        title, content
    })

    res.json({
        message: "note Created successfully"
    }
    )
})


app.get("/notes" , async (req , res)=>{
    const notes = await noteModel.find();

    res.json({
        message:"Note fetch succesfully",
        notes
    })
})

app.delete("/notes/:id", async (req ,  res)=>{
    const noteId  =  req.params.id

    await noteModel.findOneAndDelete({
        _id : noteId
    })

    res.json({
        message:"note deleted"
    })
})

connectToDB()
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})