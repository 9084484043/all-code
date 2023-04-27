require('dotenv').config()
const express = require('express');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express()
const fileUpload = require("express-fileupload")

var fs = require('fs');
const path = require("path");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
    useTempFiles : true, 
}));

mongoose.connect(process.env.Url)
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route); 

 
app.listen(process.env.PORT || 8000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 8000))
});




// "type": "module",