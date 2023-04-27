const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sharmaji232001:bhuvi844964@cluster0.a2txi.mongodb.net/user_management_system")
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


const express = require("express");
const app = express();

//for user routes
const userRoute = require('./routes/userRoute');
app.use('/',userRoute);


//for admin routes
const adminRoute = require('./routes/adminRoute');
app.use('/admin',adminRoute);

app.listen(8000,function(){
    console.log("Server is runnnig...");
})  