const express = require('express');
const routing = require('./routing/index.route');

const app = express();

app.use((req , res , next) =>{
    console.log('This middleware is btween app and routing')
    next();
})


app.use('/', routing);


module.exports = app;