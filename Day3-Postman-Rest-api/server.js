const express = require('express')

const app = express();

app.get('/home', (req, res) => {
    res.send('Hello Home Page')
})

app.get('/about', (req, res) => {
    res.send('Hello form about')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})