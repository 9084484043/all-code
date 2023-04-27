const express = require('express')
const {default:mongoose} = require('mongoose')
const multer = require('multer')
const routes = require('./Routes/routes')
var fs = require('fs');
const path = require("path");
const cors = require("cors");
const app = express()
const port = 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://sharmaji232001:bhuvi844964@cluster0.a2txi.mongodb.net/up123",
    { useNewUrlParser: true })

    .then(() => console.log("MongoDB is Connected"))
    .catch((err) => console.log(err.message))


app.use('/', routes)

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
})


