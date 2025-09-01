const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user: String,
    password: String
});

const userMOdel = mongoose.model('user', userSchema);


module.exports = userMOdel;