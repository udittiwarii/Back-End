const mongoose = require("mongoose")


// yhe ab  n mongo db ko connect krdega dbl.js se mere bhai sahi keh rha hu me or sahi hi krhta hu


function ConnectToDB(){
    mongoose.connect("mongodb+srv://uditcoder:BaKeoVcFU0P06wXz@cluster0.iyulmsb.mongodb.net/Notes_first_project")
    .then(()=>{
        console.log("Connected to DB")
    })
}

module.exports = ConnectToDB