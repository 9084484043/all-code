const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./route/route');
const multer = require("multer")
const cors = require('cors')
const fileUpload = require('express-fileupload');



const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload())

mongoose.connect("mongodb+srv://spacespider:admin@cluster0.0ps1ymn.mongodb.net/cart-management", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/',router)


app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});

