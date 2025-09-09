const mongoose = require('mongoose')

function ConnectDB() {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log('Connected DB')
        })
        .catch((err) => {
            console.log('Somthing issue ', err)
        })
}

module.exports = ConnectDB