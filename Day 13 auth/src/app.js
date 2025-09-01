const express = require('express');
const userRouter = require('./Routes/Auth.route');




const app = express();
app.use(express.json());
app.use('/', userRouter);




module.exports = app;