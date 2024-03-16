//import
const express = require("express");
const morgan = require("morgan");
const db = require("./mongodb")
const studentRoute = require('./Routes/studentRoute')

//initi
const app= new express();
app.use(morgan('dev'));
app.use('/api',studentRoute)


app.listen(1000,()=>{
    console.log("listening")
})
