const mongoose = require('mongoose')


const ModelSchema = new mongoose.Schema({
    user: String,
    password: String
})


const model = mongoose.model('users', ModelSchema)

module.exports = model