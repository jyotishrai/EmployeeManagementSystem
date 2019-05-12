const express  = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./src/router/userRoute");
const employeeRoute = require("./src/router/employeeRoute");
const bodyParser = require('body-parser')

require('dotenv').config()
var app      =  express();  
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1/MyUser', {useNewUrlParser: true},(err,result)=>{
    if(err){
        console.log("there are the error",err);
        
    }else{
    console.log("data is connected")
    }
});

console.log("there ar1");

app.use('/v1',userRoutes)
app.use('/v1',employeeRoute)

console.log("there ar3 ");







let  port  =  process.env.PORT?process.env.PORT:8000;

app.listen(port,function(){
    console.log('app running on port',port)

})


