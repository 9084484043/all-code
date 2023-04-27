require('dotenv').config()
require("./src/mongodb/db")
const express = require("express")
const router = require("./src/routes/route") 
const app = express()
app.use(express.json());

app.use('/', router)


const port = process.env.PORT || 3000
app.listen(port , ()=>{
    console.log(`express is running on port ${port}`);
    
})