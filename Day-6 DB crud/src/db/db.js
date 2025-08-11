const mongoose = require("mongoose")


function connectToDB(){
    mongoose.connect("mongodb+srv://uditcoder:BaKeoVcFU0P06wXz@cluster0.iyulmsb.mongodb.net/cohort")
    .then(()=>{
        console.log("Connect to DB")
    })
}

module.exports = connectToDB